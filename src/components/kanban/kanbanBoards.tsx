"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

import { IBoard } from "@/interface/board";

import useBoards from "@/hooks/useBoards";

import { BoardContainer } from "@/components/kanban/board/boardContainer";

export const KanbanBoards = () => {
  const { boards: user_boards, setBoards } = useBoards();
  const boardsId = useMemo(
    () => user_boards.map((board) => board.id),
    [user_boards]
  );

  const onDragStart = (e: DragStartEvent) => {
    if (e.active.data.current?.type === "Board") {
      setActiveBoard(e.active.data.current.board);
      return;
    }
  };

  const onDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;

    if (!over) return;

    const activeBoardId = active.id;
    const overBoarId = over.id;

    if (activeBoardId === overBoarId) return;

    setBoards((boards) => {
      const activeBoardIndex = boards.findIndex(
        (board) => board.id === activeBoardId
      );

      const overBoardIndex = boards.findIndex(
        (board) => board.id === overBoarId
      );

      return arrayMove(boards, activeBoardIndex, overBoardIndex);
    });
  };

  const [activeBoard, setActiveBoard] = useState<IBoard | null>(null);

  return (
    <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <div className="flex gap-2 w-full overflow-auto">
        <SortableContext items={boardsId}>
          {user_boards.map((board) => (
            <BoardContainer board={board} key={board.id} />
          ))}
        </SortableContext>
      </div>

      {typeof window !== "undefined" &&
        createPortal(
          <DragOverlay>
            {activeBoard && <BoardContainer board={activeBoard} />}
          </DragOverlay>,
          document.body
        )}
    </DndContext>
  );
};
