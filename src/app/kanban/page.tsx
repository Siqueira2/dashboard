"use client";

import { SectionHeader } from "@/components/sectionHeader";
import { CreateBoard } from "@/components/kanban/createBoard";
import { KanbanBoards } from "@/components/kanban/kanbanBoards";

const Kanban = () => {
  return (
    <section className="space-y-10">
      <div className="flex justify-between items-end">
        <SectionHeader header="Kanban" description="app" />
      </div>

      <div className="flex overflow-x-auto gap-2 ">
        <KanbanBoards />

        <CreateBoard />
      </div>
    </section>
  );
};

export default Kanban;
