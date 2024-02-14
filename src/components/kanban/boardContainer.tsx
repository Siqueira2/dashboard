"use client";

import { Trash, Edit } from "lucide-react";

import useBoards from "@/hooks/useBoards";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { EditBoard } from "@/components/kanban/editBoard";

export const BoardContainer = () => {
  const { boards, removeBoard } = useBoards();

  return (
    <>
      {boards.map((board) => (
        <Card key={board.id} className="min-w-[200px] px-2">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold">{board.title}</h2>

            <span>
              <EditBoard board={board} />

              <Button
                variant="destructive_ghost"
                size="sm"
                className="px-2"
                onClick={() => removeBoard(board)}
              >
                <Trash size={15} />
              </Button>
            </span>
          </div>
        </Card>
      ))}
    </>
  );
};
