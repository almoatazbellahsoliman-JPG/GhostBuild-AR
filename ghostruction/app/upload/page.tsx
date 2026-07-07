import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db/prisma";
import UploadWorkspace from "@/components/upload/UploadWorkspace";

export default async function UploadPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const projects = await prisma.project.findMany({
    where: {
      ownerId: userId,
    },
    orderBy: {
      updatedAt: "desc",
    },
    select: {
      id: true,
      name: true,
      description: true,
      status: true,
    },
  });

  return <UploadWorkspace projects={projects} />;
}