import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  const project = await prisma.project.create({
    data: {
      name: body.name,
      description: body.description,
      ownerId: userId,
    },
  });

  return NextResponse.json(project);
}

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json([], { status: 401 });
  }

  const projects = await prisma.project.findMany({
    where: { ownerId: userId },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(projects);
}