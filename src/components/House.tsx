import { useState } from "react";

interface houseTypes {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  income: number;
  setIncome: React.Dispatch<React.SetStateAction<number>>;
  cost: number;
  houseIncome: number;
  top: string;
  left: string;
}

export default function House({
  balance,
  setBalance,
  income,
  setIncome,
  cost,
  houseIncome,
  top,
  left,
}: houseTypes) {
  const [isBought, setIsBought] = useState(false);

  function clickHouse() {
    if (!isBought && balance >= cost) {
      setBalance(balance - cost);
      setIncome(income + houseIncome);
      setIsBought(true);
    }
  }

  return (
    <div
      onClick={clickHouse}
      className="bg-[#9a4f50] flex flex-col items-center text-[1rem] absolute cursor-pointer"
      style={{ top: top, left: left }}
    >
      <p>{!isBought ? "Buy:" + cost : "Owned"}</p>
      <p>Rent Income: {houseIncome}</p>
    </div>
  );
}
