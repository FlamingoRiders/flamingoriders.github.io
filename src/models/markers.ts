export interface PositionMarker {
  date: string;
  startPos: [number, number];
  endPos: [number, number];
  distance: number;
  time: string;
}

export interface CumulatedMarker {
  distance: number;
  time: string;
}
