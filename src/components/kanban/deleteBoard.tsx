"use client";

import { Trash } from "lucide-react";

import { IBoard } from "@/interface/board";

import useBoards from "@/hooks/useBoards";

import { Button } from "@/components/ui/button";

type Props = {
  board: IBoard;
};

export const DeleteBoard = ({ board }: Props) => {
  const { removeBoard } = useBoards();

  return (
    <Button
      variant="destructive_ghost"
      size="sm"
      className="p-2 space-x-2 w-full h-full flex justify-start cursor-pointer"
      onClick={() => removeBoard(board)}
    >
      <Trash size={15} />

      <p>Delete</p>
    </Button>
  );
};
