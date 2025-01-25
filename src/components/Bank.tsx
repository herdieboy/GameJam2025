import { useState } from "react";
import { useGlobalContext } from "../GlobalContext";

export default function Bank() {
  const { balance, expense, income, setExpense, setBalance, setDate, date } =
    useGlobalContext();
  const loanValue = 100000;
  const [loanCost, setLoanCost] = useState(500);

  function takeLoan() {
    setExpense(expense + loanCost);
    setBalance(balance + loanValue + (income - expense));
    setLoanCost(Math.round(loanCost * 1.01));

    if (date.month === 12) {
      setDate({ month: 1, year: date.year + 1 });
    } else {
      setDate({ month: date.month + 1, year: date.year });
    }
  }

  return (
    <div className="absolute group z-50 mt-[0rem] ml-[0rem]">
      <div className="bg-[url(/bank.png)] bg-contain h-[100px] w-[140px]"></div>
      <div className="absolute w-[400px] text-left bg-white p-[2rem] border-4 border-dkgrey invisible group-hover:visible">
        <p>Available Loan!</p>
        <p>Value: {loanValue}</p>
        <p>Initial Monthly Cost: {loanCost}</p>
        <button
          onClick={takeLoan}
          className="bg-[#be955c] border-4 p-[0.5rem] cursor-pointer"
        >
          Take Loan
        </button>
      </div>
    </div>
  );
}
