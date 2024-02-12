import { useContextSelector } from "use-context-selector";
import { GlobalContext } from "@/context/globalContext";

const useBoards = () => {
  const boards = useContextSelector(GlobalContext, (global) => global.boards);

  const createNewBoard = useContextSelector(
    GlobalContext,
    (global) => global.createNewBoard
  );

  return {
    boards,
    createNewBoard,
  };
};

export default useBoards;
