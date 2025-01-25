import { useState } from "react";
//import Cursor from "./components/Cursor";
import Wallet from "./components/Wallet";
import House from "./components/House";

export default function App() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [date, setDate] = useState({ month: 1, year: 2000 });

  const globalProps = {
    balance,
    setBalance,
    income,
    setIncome,
  };

  function nextMonth() {
    if (date.month === 12) {
      setDate({ month: 1, year: date.year + 1 });
    } else {
      setDate({ month: date.month + 1, year: date.year });
    }
    setBalance(balance + (income - expense));
  }

  return (
    <div className="w-screen h-dvh text-[2rem] leading-none bg-[#6eaa78]">
      <Wallet
        balance={balance}
        incoming={income}
        outgoing={expense}
        date={date.year}
      />
      <House
        {...globalProps}
        cost={100000}
        houseIncome={1000}
        top="100px"
        left="100px"
      />
      <div
        onClick={nextMonth}
        className="absolute bottom-0 w-full text-center cursor-pointer"
      >
        {date.month}
      </div>
    </div>
  );
}
