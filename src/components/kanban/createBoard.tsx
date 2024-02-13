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
} from "@/components/ui/dialog";

export const CreateBoard = () => {
  const { createNewBoard } = useBoards();
  const [title, setTitle] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) {
      console.log("Preenche essa porra");
      return;
    }

    createNewBoard({ title });
    setTitle("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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

        <form onSubmit={handleClick} className="flex flex-col gap-4">
          <Input
            id="name"
            value={title}
            placeholder="Insert name of the board"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />

          <Button className="max-w-fit self-end">Create board</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
