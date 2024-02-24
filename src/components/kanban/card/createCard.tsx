import { ChangeEvent, RefObject, useState } from "react";

import useCards from "@/hooks/useCards";
import useBoards from "@/hooks/useBoards";

import { Input } from "@/components/ui/input";

type Props = {
  board_id: string | number;
  action_callback: CallableFunction;
  className?: string;
};

export const CreateCard = ({ board_id, action_callback, className }: Props) => {
  const { createNewCard } = useCards();
  const { addCard } = useBoards();
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) {
      console.log("Preenche essa porra");
      return;
    }

    const card = createNewCard({ title });
    addCard(card, board_id);
    setTitle("");
    action_callback();
  };
  return (
    <form onSubmit={handleSubmit} className={className}>
      <Input
        placeholder="Create new card"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
    </form>
  );
};
