export type Point = {
  x: number;
  y: number;
};

export type Wall = {
  start: Point;
  end: Point;
  thickness: number;
};

export type FloorPlan = {
  width: number;
  height: number;
  walls: Wall[];
};