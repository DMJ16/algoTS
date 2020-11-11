export function kClosestPointsToOrigin(
  points: number[][],
  k: number
): number[][] {
  const findDistance = ([a, b]: number[]) => Math.pow(a, 2) + Math.pow(b, 2);
  return points.sort((a, b) => findDistance(a) - findDistance(b)).slice(0, k);
}
