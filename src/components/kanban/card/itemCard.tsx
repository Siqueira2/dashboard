import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

import { ICard } from "@/interface/card";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type ItemCardProps = {
  card: ICard;
};

export const ItemCard = ({ card }: ItemCardProps) => {
  const {
    setNodeRef,
    attributes,
    transition,
    listeners,
    transform,
    isDragging,
  } = useSortable({
    id: card.id,
    data: {
      type: "Card",
      card,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <li ref={setNodeRef} style={style}>
        <Card className=" min-h-[38px] p-2 opacity-30" />
      </li>
    );
  }

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="list-none"
    >
      <Collapsible>
        <Card className="py-2 px-1 max-w-full min-h-fit overflow-hidden space-y-1.5">
          <CollapsibleTrigger asChild>
            <h4 className="font-medium text-sm truncate w-full">
              {card.title}
            </h4>
          </CollapsibleTrigger>

          <CollapsibleContent className="max-w-full">
            <ScrollArea>
              <p className="text-sm text-wrap break-words max-h-[100px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore voluptate fuga quos incidunt eveniet aspernatur ullam
                earum laborum quae totam ducimus, explicabo perspiciatis maxime
                error cumque vel iste tenetur eaque nobis odio cum adipisci.
                Deleniti, tempora. Expedita exercitationem ut doloremque
                temporibus incidunt. Ea recusandae id at in velit quis delectus!
              </p>
            </ScrollArea>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </li>
  );
};
