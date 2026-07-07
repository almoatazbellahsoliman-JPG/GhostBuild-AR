import { NextResponse } from "next/server";
import { processBlueprint } from "@/lib/vision/blueprintEngine";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  const buffer = Buffer.from(await file.arrayBuffer());

  const blueprint = await processBlueprint(buffer);

  return NextResponse.json({
    blueprint,
  });
}