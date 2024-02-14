"use client";

import useBoards from "@/hooks/useBoards";

import { DropdownBoard } from "@/components/kanban/dropdownBoard";

import { Card } from "@/components/ui/card";

export const BoardContainer = () => {
  const { boards } = useBoards();

  return (
    <>
      {boards.map((board) => (
        <Card key={board.id} className="min-w-[200px] p-2">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold">{board.title}</h2>

            <DropdownBoard board={board} />
          </div>
        </Card>
      ))}
    </>
  );
};
