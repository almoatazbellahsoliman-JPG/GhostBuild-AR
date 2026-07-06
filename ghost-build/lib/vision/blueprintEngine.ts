import { loadBlueprint } from "./loader";
import { preprocessBlueprint } from "./preprocess";
import { analyzeBlueprint } from "./analyzeBlueprint";
import { detectLinesFromEdges } from "./detectLines";
import { buildFloorPlan } from "./core/floorplanBuilder";
import type { FloorPlan } from "../types/floorplan";

export async function processBlueprint(
  input: string | Buffer
): Promise<FloorPlan> {
  try {
    // 1. Load image
    const image = loadBlueprint(input);

    // 2. Preprocess (grayscale, normalize, sharpen)
    const processed = await preprocessBlueprint(image);

    // 3. Edge detection / analysis
    const analysis = await analyzeBlueprint(processed);

    // 4. Line extraction from edges
    const lines = detectLinesFromEdges(
      analysis.edges,
      analysis.width,
      analysis.height
    );

    // 5. Build floorplan model
    return buildFloorPlan(
      analysis.width,
      analysis.height,
      lines
    );
  } catch (error) {
    console.error("Blueprint processing failed:", error);
    throw new Error("Failed to process blueprint");
  }
}