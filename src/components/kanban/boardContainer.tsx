"use client";

import { Trash, Edit } from "lucide-react";

import useBoards from "@/hooks/useBoards";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Tooltip from "@/components/tooltip";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export const BoardContainer = () => {
  const { boards, removeBoard } = useBoards();

  return (
    <>
      {boards.map((board) => (
        <Card key={board.id} className="min-w-[200px] px-2">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold">{board.title}</h2>

            <span>
              <Tooltip text="Editar">
                <Button variant="primary_ghost" size="sm" className="px-2">
                  <Edit size={15} />
                </Button>
              </Tooltip>

              <Tooltip text="Excluir">
                <Button
                  variant="destructive_ghost"
                  size="sm"
                  className="px-2"
                  onClick={() => removeBoard(board)}
                >
                  <Trash size={15} />
                </Button>
              </Tooltip>
            </span>
          </div>
        </Card>
      ))}
    </>
  );
};
