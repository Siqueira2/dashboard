"use client";

import { MoreVertical } from "lucide-react";

import { IBoard } from "@/interface/board";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { EditBoard } from "@/components/kanban/editBoard";
import { DeleteBoard } from "@/components/kanban/deleteBoard";

type Props = {
  board: IBoard;
};

export const DropdownBoard = ({ board }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="primary_ghost" size="sm" className="px-1">
          <MoreVertical size={16} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <>
            <EditBoard board={board} />
          </>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <>
            <DeleteBoard board={board} />
          </>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
