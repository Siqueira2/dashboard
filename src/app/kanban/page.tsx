import { SectionHeader } from "@/components/sectionHeader";
import { SearchForm } from "@/components/searchForm";
import { CreateBoard } from "@/components/kanban/createBoard";

const Kanban = () => {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-end">
        <SectionHeader header="Kanban" description="app" />

        <SearchForm />
      </div>

      <CreateBoard />
    </section>
  );
};

export default Kanban;
