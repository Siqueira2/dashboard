"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import useBoards from "@/hooks/useBoards";

import { Button } from "@/components/ui/button";
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

export const CreateBoard = () => {
  const { boards, createNewBoard } = useBoards();
  const [title, setTitle] = useState<string>("New Board");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!title) {
      console.log("Preenche essa porra");
      return;
    }

    createNewBoard({ title });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="space-x-2" variant="outline">
          <Plus size={20} />
          <p>Add new board</p>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new board</DialogTitle>

          <DialogDescription>Add new board in your kanban.</DialogDescription>
        </DialogHeader>

        <Input
          id="name"
          value={title}
          placeholder="Insert name of the board"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />

        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleClick}>Create board</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
