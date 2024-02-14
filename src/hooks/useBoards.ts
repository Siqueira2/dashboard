import { useContextSelector } from "use-context-selector";
import { GlobalContext } from "@/context/globalContext";

const useBoards = () => {
  const boards = useContextSelector(GlobalContext, (state) => state.boards);

  const createNewBoard = useContextSelector(
    GlobalContext,
    (state) => state.createNewBoard
  );

  const removeBoard = useContextSelector(
    GlobalContext,
    (state) => state.removeBoard
  );

  const editBoard = useContextSelector(
    GlobalContext,
    (state) => state.editBoard
  );

  return {
    boards,
    createNewBoard,
    removeBoard,
    editBoard,
  };
};

export default useBoards;
