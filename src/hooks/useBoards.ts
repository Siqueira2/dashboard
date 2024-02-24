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

  const addCard = useContextSelector(GlobalContext, (state) => state.addCard);

  return {
    boards,
    createNewBoard,
    removeBoard,
    editBoard,
    addCard,
  };
};

export default useBoards;
