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
  style: string;
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
  style,
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
      className="h-[100px] w-[140px] bg-contain flex flex-col items-center text-[1rem] absolute cursor-pointer group"
      style={{ top: top, left: left, backgroundImage: `url(/${style}.png)` }}
    >
      <div className="invisible group-hover:visible text-center bg-white border-4 p-[0.5rem] m-auto">
        <p>{!isBought ? "Buy:" + cost : "Owned"}</p>
        <p>Rent Income: {houseIncome}</p>
      </div>
    </div>
  );
}
