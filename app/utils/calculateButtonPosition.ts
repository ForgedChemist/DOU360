export const calculateButtonPosition = (
  baseLeft: number,
  baseTop: number,
  baseWidth: number,
  baseHeight: number,
  zoomLevel: number,
  mapCenterOffsetX = 300,
  mapCenterOffsetY = 200
) => {
  return {
    left: `${baseLeft * zoomLevel - mapCenterOffsetX * (zoomLevel - 1)}px`,
    top: `${baseTop * zoomLevel - mapCenterOffsetY * (zoomLevel - 1)}px`,
    width: `${baseWidth * zoomLevel}px`,
    height: `${baseHeight * zoomLevel}px`,
  };
};
