"use client";

import { SectionHeader } from "@/components/sectionHeader";
import { SearchForm } from "@/components/searchForm";
import { CreateBoard } from "@/components/kanban/createBoard";
import { BoardContainer } from "@/components/kanban/boardContainer";

const Kanban = () => {
  return (
    <section className="space-y-10">
      <div className="flex justify-between items-end">
        <SectionHeader header="Kanban" description="app" />

        <SearchForm />
      </div>

      <div className="flex overflow-x-auto gap-2 ">
        <BoardContainer />

        <CreateBoard />
      </div>
    </section>
  );
};

export default Kanban;
