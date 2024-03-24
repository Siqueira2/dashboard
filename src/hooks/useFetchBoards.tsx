import { fetchBoards } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchBoards = () =>
  useQuery({
    queryKey: ["boards"],
    queryFn: fetchBoards,
  });
