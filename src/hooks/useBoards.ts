import { useContextSelector } from "use-context-selector";
import { GlobalContext } from "@/context/globalContext";

const useBoards = () => {
  const boards = useContextSelector(GlobalContext, (global) => global.boards);

  const createNewBoard = useContextSelector(
    GlobalContext,
    (global) => global.createNewBoard
  );

  const removeBoard = useContextSelector(
    GlobalContext,
    (global) => global.removeBoard
  );

  return {
    boards,
    createNewBoard,
    removeBoard,
  };
};

export default useBoards;
