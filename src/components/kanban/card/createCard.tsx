import { useState } from "react";

import useCards from "@/hooks/useCards";

import { Input } from "@/components/ui/input";

export const CreateCard = () => {
  const { createNewCard } = useCards();
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) {
      console.log("Preenche essa porra");
      return;
    }

    createNewCard({ title });
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder="Create new card" />
    </form>
  );
};
