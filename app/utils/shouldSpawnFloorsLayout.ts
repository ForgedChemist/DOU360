export const shouldSpawnFloorsLayout = (zoomActions: number, spawnThreshold = 6) => {
  return zoomActions >= spawnThreshold;
};
