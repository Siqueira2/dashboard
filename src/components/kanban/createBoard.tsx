"use client";

import { Plus } from "lucide-react";

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

        <Input id="name" defaultValue="Pedro Duarte" />

        <DialogFooter>
          <Button type="submit">Create board</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
