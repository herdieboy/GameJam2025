import React, { createContext, useState, useContext, ReactNode } from "react";

interface DateType {
  month: number;
  year: number;
}

interface GlobalContextType {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  income: number;
  setIncome: React.Dispatch<React.SetStateAction<number>>;
  expense: number;
  setExpense: React.Dispatch<React.SetStateAction<number>>;
  date: DateType;
  setDate: React.Dispatch<React.SetStateAction<DateType>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [balance, setBalance] = useState(100000);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(500);
  const [date, setDate] = useState<DateType>({ month: 1, year: 2000 });

  return (
    <GlobalContext.Provider
      value={{
        balance,
        setBalance,
        income,
        setIncome,
        expense,
        setExpense,
        date,
        setDate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
