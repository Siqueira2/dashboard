"use client";

import { MoreVertical } from "lucide-react";

import useBoards from "@/hooks/useBoards";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { EditBoard } from "@/components/kanban/editBoard";
import { DeleteBoard } from "@/components/kanban/deleteBoard";

export const BoardContainer = () => {
  const { boards } = useBoards();

  return (
    <>
      {boards.map((board) => (
        <Card key={board.id} className="min-w-[200px] p-2">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold">{board.title}</h2>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="primary_ghost" size="sm" className="px-1">
                  <MoreVertical size={16} />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <EditBoard board={board} />
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <DeleteBoard board={board} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Card>
      ))}
    </>
  );
};
