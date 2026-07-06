import type { BlueprintData } from "../vision/types";

export function parseBlueprint(data: BlueprintData) {
  return {
    width: data.width,
    height: data.height,
    buffer: data.buffer,

    meta: data.meta,
  };
}