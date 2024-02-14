import { useContextSelector } from "use-context-selector";
import { GlobalContext } from "@/context/globalContext";

const useCards = () => {
  const cards = useContextSelector(GlobalContext, (state) => state.cards);

  const createNewCard = useContextSelector(
    GlobalContext,
    (state) => state.createNewCard
  );

  const removeCard = useContextSelector(
    GlobalContext,
    (state) => state.removeCard
  );

  const editCard = useContextSelector(GlobalContext, (state) => state.editCard);

  return {
    cards,
    createNewCard,
    removeCard,
    editCard,
  };
};

export default useCards;
