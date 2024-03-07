"use client";

import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  DragOverEvent,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

import { IBoard } from "@/interface/board";

import useBoards from "@/hooks/useBoards";

import { BoardContainer } from "@/components/kanban/board/boardContainer";
import { ICard } from "@/interface/card";
import { ItemCard } from "./card/itemCard";

export const KanbanBoards = () => {
  const { boards: user_boards, setBoards, updateCards } = useBoards();
  const [activeBoard, setActiveBoard] = useState<IBoard | null>(null);
  const [activeCard, setActiveCard] = useState<ICard | null>(null);

  const boardsId = useMemo(
    () => user_boards.map((board) => board.id),
    [user_boards]
  );

  const onDragStart = (e: DragStartEvent) => {
    if (e.active.data.current?.type === "Board") {
      setActiveBoard(e.active.data.current.board);
      return;
    }

    if (e.active.data.current?.type === "Card") {
      setActiveCard(e.active.data.current.card);
      return;
    }
  };

  const onDragEnd = (e: DragEndEvent) => {
    setActiveBoard(null);
    setActiveCard(null);

    const { active, over } = e;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveABoard = active.data.current?.type === "Board";
    if (!isActiveABoard) return;

    setBoards((boards) => {
      const activeBoardIndex = boards.findIndex(
        (board) => board.id === activeId
      );

      const overBoardIndex = boards.findIndex((board) => board.id === overId);

      return arrayMove(boards, activeBoardIndex, overBoardIndex);
    });
  };

  const onDragOver = (e: DragOverEvent) => {
    const { active, over } = e;
    if (!over) return;

    const {
      data: { current: { card: { board_id } } = {} },
    } = active;
    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveACard = active.data.current?.type === "Card";
    const isOverACard = over.data.current?.type === "Card";

    if (!isActiveACard) return;

    if (isActiveACard && isOverACard) {
      const board_to_update = user_boards.find(
        (board) => board.id === board_id
      );

      if (!board_to_update) return;

      const activeIndex = board_to_update.cards.findIndex(
        (card) => card.id === activeId
      );
      const overIndex = board_to_update.cards.findIndex(
        (card) => card.id === overId
      );

      const sortable_cards = arrayMove(
        board_to_update.cards,
        activeIndex,
        overIndex
      );

      updateCards(sortable_cards, board_id);
    }
  };

  return (
    <DndContext
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
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
            {activeCard && <ItemCard card={activeCard} />}
          </DragOverlay>,
          document.body
        )}
    </DndContext>
  );
};
