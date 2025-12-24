import { useCallback } from "react";

type UseRoomClickHandlerProps = {
  dragDistance: number;
  threshold?: number;
  onRoomSelect: (room: string) => void;
};

export const useRoomClickHandler = ({
  dragDistance,
  threshold = 5,
  onRoomSelect,
}: UseRoomClickHandlerProps) => {
  const handleRoomClickWithDragCheck = useCallback(
    (room: string) => {
      if (dragDistance < threshold) {
        onRoomSelect(room);
      }
    },
    [dragDistance, onRoomSelect, threshold]
  );

  return { handleRoomClickWithDragCheck };
};
