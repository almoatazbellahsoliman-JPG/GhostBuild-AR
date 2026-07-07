import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db/prisma";
import { processBlueprint } from "@/lib/vision/blueprintEngine";

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let projectId = "";

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    projectId = formData.get("projectId")?.toString() ?? "";

    if (!projectId) {
      return NextResponse.json(
        { error: "Create or choose a project before uploading." },
        { status: 400 }
      );
    }

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded." },
        { status: 400 }
      );
    }

    const project = await prisma.project.findFirst({
      where: {
        id: projectId,
        ownerId: userId,
      },
    });

    if (!project) {
      return NextResponse.json(
        { error: "Project not found." },
        { status: 404 }
      );
    }

    await prisma.project.update({
      where: {
        id: projectId,
      },
      data: {
        status: "PROCESSING",
      },
    });

    const buffer = Buffer.from(await file.arrayBuffer());
    const blueprint = await processBlueprint(buffer);

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
    const fileName = `${Date.now()}-${safeName}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads");

    await mkdir(uploadDir, { recursive: true });
    await writeFile(path.join(uploadDir, fileName), buffer);

    const fileUrl = `/uploads/${fileName}`;

    const blueprintRecord = await prisma.blueprint.create({
      data: {
        filename: file.name,
        fileUrl,
        projectId,
      },
    });

    await prisma.project.update({
      where: {
        id: projectId,
      },
      data: {
        status: "READY",
      },
    });

    return NextResponse.json({
      blueprint,
      blueprintRecord,
      fileUrl,
    });
  } catch (error) {
    console.error("Blueprint upload failed:", error);

    if (projectId) {
      await prisma.project.update({
        where: {
          id: projectId,
        },
        data: {
          status: "ERROR",
        },
      });
    }

    return NextResponse.json(
      { error: "Failed to process blueprint." },
      { status: 500 }
    );
  }
}