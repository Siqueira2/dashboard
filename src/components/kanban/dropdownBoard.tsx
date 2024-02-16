"use client";

import { GalleryHorizontalEnd, MoreVertical } from "lucide-react";

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
  action_callback: CallableFunction;
};

export const DropdownBoard = ({ board, action_callback }: Props) => {
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

        <DropdownMenuItem asChild>
          <>
            <Button
              variant="primary_ghost"
              size="sm"
              className="p-2 space-x-2 w-full h-full flex justify-start cursor-pointer"
              onClick={() => action_callback()}
            >
              <GalleryHorizontalEnd size={15} />

              <p>Create card</p>
            </Button>
          </>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
