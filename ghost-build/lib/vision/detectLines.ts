export type Point = {
  x: number;
  y: number;
};

export type Line = {
  start: Point;
  end: Point;
};

export function detectLinesFromEdges(
  buffer: Buffer,
  width: number,
  height: number
): Line[] {
  const pixels = Uint8Array.from(buffer);

  const lines: Line[] = [];
  const step = 6;
  const threshold = 120;

  let start: Point | null = null;

  for (let y = 0; y < height; y += step) {
    start = null;

    for (let x = 0; x < width; x += step) {
      const i = (y * width + x) % pixels.length;
      const value = pixels[i];

      if (value > threshold && !start) {
        start = { x, y };
      }

      if (value <= threshold && start) {
        lines.push({
          start,
          end: { x, y },
        });
        start = null;
      }
    }
  }

  return lines;
}