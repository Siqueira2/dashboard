import { useMemo, useState } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable, SortableContext } from "@dnd-kit/sortable";

import { IBoard } from "@/interface/board";

import { DropdownBoard } from "@/components/kanban/board/dropdownBoard";
import { CreateCard } from "@/components/kanban/card/createCard";
import { ItemCard } from "@/components/kanban/card/itemCard";

import { Card } from "@/components/ui/card";

type BoardContainerProps = {
  board: IBoard;
};

export const BoardContainer = ({ board }: BoardContainerProps) => {
  const [selectedBoard, setSelectedBoard] = useState<number | string | null>(
    null
  );
  const cardsId = useMemo(() => {
    if (!board.cards) return [];
    return board.cards.map((card) => card.id);
  }, [board.cards]);

  const {
    setNodeRef,
    attributes,
    transition,
    listeners,
    transform,
    isDragging,
  } = useSortable({
    id: board.id,
    data: {
      type: "Board",
      board,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <Card
        ref={setNodeRef}
        style={style}
        className="min-w-[250px] w-[250px] p-2 min-h-fit opacity-30"
      />
    );
  }

  return (
    <Card
      ref={setNodeRef}
      style={style}
      key={board.id}
      className="min-w-[250px] w-[250px] h-fit p-2"
    >
      <div className="flex justify-between items-center">
        <h2
          className="text-base font-semibold truncate w-full"
          {...attributes}
          {...listeners}
        >
          {board.title}
        </h2>

        <DropdownBoard
          board={board}
          action_callback={() => setSelectedBoard(board.id)}
        />
      </div>

      {selectedBoard === board.id && (
        <CreateCard
          className="mb-2"
          action_callback={() => setSelectedBoard(null)}
          board_id={board.id}
        />
      )}

      <ul className="space-y-2">
        <SortableContext items={cardsId}>
          {board.cards &&
            board.cards
              .map((card) => <ItemCard card={card} key={card.id} />)
              .reverse()}
        </SortableContext>
      </ul>
    </Card>
  );
};
