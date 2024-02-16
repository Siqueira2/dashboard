"use client";

import { useState } from "react";

import useBoards from "@/hooks/useBoards";

import { DropdownBoard } from "@/components/kanban/dropdownBoard";
import { CreateCard } from "@/components/kanban/card/createCard";

import { Card } from "@/components/ui/card";

export const BoardContainer = () => {
  const [create, setCreate] = useState<boolean>(false);
  const { boards } = useBoards();

  const handleCreateCard = () => {};

  return (
    <>
      {boards.map((board) => (
        <Card key={board.id} className="min-w-[200px] p-2">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold">{board.title}</h2>

            <DropdownBoard
              board={board}
              action_callback={() => setCreate(true)}
            />
          </div>

          {board.cards?.length &&
            board.cards.map((card) => <div key={card.id}>{card.title}</div>)}
        </Card>
      ))}
    </>
  );
};
