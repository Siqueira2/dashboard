"use client";

import { useState } from "react";
import { Edit } from "lucide-react";

import { IBoard } from "@/interface/board";

import useBoards from "@/hooks/useBoards";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  board: IBoard;
  action_callback: CallableFunction;
};

export const EditBoard = ({ board, action_callback }: Props) => {
  const { editBoard } = useBoards();
  const [title, setTitle] = useState<string>(board.title);
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editBoard({ ...board, title });
    setTitle("");
    setOpen(false);
    action_callback();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="primary_ghost"
          size="sm"
          className="p-2 space-x-2 w-full h-full flex justify-start"
        >
          <Edit size={15} />

          <p>Edit</p>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit your board</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />

          <Button type="submit" className="max-w-fit self-end">
            Save changes
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
