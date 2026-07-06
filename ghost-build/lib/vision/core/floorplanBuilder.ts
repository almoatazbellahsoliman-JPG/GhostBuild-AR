// Local type definitions to avoid unresolved import for ../types/floorplan
type Point = { x: number; y: number };
type Line = { start: Point; end: Point };
type Wall = { start: Point; end: Point; thickness: number };
type FloorPlan = { width: number; height: number; walls: Wall[] };

export function buildFloorPlan(width: number, height: number, lines: Line[]): FloorPlan {
  return {
    width,
    height,
    walls: lines.map((l) => ({ start: l.start, end: l.end, thickness: 0.2 })),
  };
}