import { useState } from "react";

interface BankProps {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  expense: number;
  setExpense: React.Dispatch<React.SetStateAction<number>>;
}

export default function Bank({
  balance,
  setBalance,
  expense,
  setExpense,
}: BankProps) {
  const loanValue = 100000;
  const [loanCost, setLoanCost] = useState(1000);

  function takeLoan() {
    setExpense(expense + loanCost);
    setBalance(balance + loanValue);
    setLoanCost(Math.round(loanCost * 1.01));
    console.log("loan" + balance);
  }

  return (
    <div className="group z-50">
      <div>bank</div>
      <div className="absolute text-left bg-white p-[2rem] border-4 border-dkgrey invisible group-hover:visible">
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
