import sharp from "sharp";

export function loadBlueprint(input: string | Buffer) {
  return sharp(input).resize(512, 512, {
    fit: "inside",
  });
}