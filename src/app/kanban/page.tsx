"use client";

import { SectionHeader } from "@/components/sectionHeader";
import { CreateBoard } from "@/components/kanban/createBoard";
import { KanbanBoards } from "@/components/kanban/kanbanBoards";

const Kanban = () => {
  return (
    <section className="space-y-10 h-full overflow-hidden">
      <div className="flex justify-between items-end">
        <SectionHeader header="Kanban" description="app" />
      </div>

      <div className="flex gap-2 h-full">
        <KanbanBoards />

        <CreateBoard />
      </div>
    </section>
  );
};

export default Kanban;
