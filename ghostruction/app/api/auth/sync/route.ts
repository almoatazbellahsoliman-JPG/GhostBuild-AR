import { prisma } from "@/lib/db/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { clerkId, email, name } = body;

    if (!clerkId || !email) {
      return Response.json(
        { error: "Missing clerkId or email" },
        { status: 400 }
      );
    }

    const user = await prisma.user.upsert({
      where: { email }, // we use email because your schema has email unique
      update: {
        name,
      },
      create: {
        email,
        name,
      },
    });

    return Response.json({ user });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}