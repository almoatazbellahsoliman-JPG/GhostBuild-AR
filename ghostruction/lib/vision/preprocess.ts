import type { Sharp } from "sharp";

export async function preprocessBlueprint(image: Sharp) {
  return image.grayscale().normalize().gamma(1.2).sharpen();
}