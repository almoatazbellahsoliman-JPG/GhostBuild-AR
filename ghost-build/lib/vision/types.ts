export type BlueprintData = {
  width: number;
  height: number;
  buffer: string;

  meta: {
    format?: string;
    space?: string;
    hasAlpha?: boolean;
  };
};