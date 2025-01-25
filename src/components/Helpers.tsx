import { useState } from "react";

interface DateType {
  month: number;
  year: number;
}

export const GlobalProps = () => {
  const [balance, setBalance] = useState<number>(0);
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);
  const [date, setDate] = useState<DateType>({ month: 1, year: 2000 });

  const globalProps = {
    balance,
    setBalance,
    income,
    setIncome,
    expense,
    setExpense,
    date,
    setDate,
  };

  return globalProps;
};

export function nextMonth(
  date: DateType,
  setDate: React.Dispatch<React.SetStateAction<DateType>>,
  balance: number,
  setBalance: React.Dispatch<React.SetStateAction<number>>,
  income: number,
  expense: number
) {
  if (date.month === 12) {
    setDate({ month: 1, year: date.year + 1 });
  } else {
    setDate({ month: date.month + 1, year: date.year });
  }
  setBalance(balance + (income - expense));
}
