"use client";

import { createContext } from "use-context-selector";

import { BoardSlice } from "@/slices/boards";

type GlobalProviderProps = {
  children: React.ReactNode;
  boardSlice: ReturnType<typeof BoardSlice>;
};

export const GlobalContext = createContext({} as ReturnType<typeof BoardSlice>);

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const boardSlice = BoardSlice();

  return (
    <GlobalContext.Provider
      value={{
        ...boardSlice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
