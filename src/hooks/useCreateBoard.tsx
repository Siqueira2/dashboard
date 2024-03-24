import { createBoard } from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateBoard = () => {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: createBoard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["boards"] });
    },
  });

  return mutate;
};
