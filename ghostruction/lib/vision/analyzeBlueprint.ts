import type { Sharp } from "sharp";

export type BlueprintAnalysis = {
  edges: Buffer;
  width: number;
  height: number;
};

export async function analyzeBlueprint(image: Sharp) {
  const meta = await image.metadata();

  const width = meta.width ?? 512;
  const height = meta.height ?? 512;

  const edges = await image
    .clone()
    .convolve({
      width: 3,
      height: 3,
      kernel: [-1, -1, -1, -1, 8, -1, -1, -1, -1],
    })
    .raw()
    .toBuffer();

  return {
    edges,
    width,
    height,
  };
}