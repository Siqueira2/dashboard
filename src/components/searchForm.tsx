import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SearchForm = () => {
  return (
    <form className="flex space-x-2 min-w-4">
      <Input placeholder="Search" />

      <Button size="icon" variant="ghost">
        <Search />
      </Button>
    </form>
  );
};
