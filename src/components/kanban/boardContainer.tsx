"use client";

import { useState, useRef, RefObject } from "react";

import useBoards from "@/hooks/useBoards";

import { DropdownBoard } from "@/components/kanban/dropdownBoard";
import { CreateCard } from "@/components/kanban/card/createCard";
import { ItemCard } from "@/components/kanban/card/itemCard";

import { Card } from "@/components/ui/card";

export const BoardContainer = () => {
  const [selectedBoard, setSelectedBoard] = useState<number | string | null>(
    null
  );
  const { boards } = useBoards();

  return (
    <>
      {boards.map((board) => (
        <Card key={board.id} className="min-w-[250px] w-[250px] p-2 h-fit">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold truncate">{board.title}</h2>

            <DropdownBoard
              board={board}
              action_callback={() => setSelectedBoard(board.id)}
            />
          </div>

          {selectedBoard === board.id && (
            <CreateCard
              className="mb-2"
              action_callback={() => setSelectedBoard(null)}
              board_id={board.id}
            />
          )}

          <ul className="space-y-2">
            {board.cards &&
              board.cards
                .map((card) => <ItemCard card={card} key={card.id} />)
                .reverse()}
          </ul>
        </Card>
      ))}
    </>
  );
};
