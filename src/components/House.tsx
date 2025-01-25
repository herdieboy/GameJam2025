import { useState } from "react";
import { useGlobalContext } from "../GlobalContext";

interface HouseProps {
  cost: number;
  houseIncome: number;
  top: string;
  left: string;
  style: string;
}

export default function House({
  cost,
  houseIncome,
  top,
  left,
  style,
}: HouseProps) {
  const { balance, setBalance, income, setIncome, setDate, date } =
    useGlobalContext();
  const [isBought, setIsBought] = useState(false);

  function clickHouse() {
    if (!isBought && balance >= cost) {
      setBalance(balance - cost + income);
      setIncome(income + houseIncome);
      setIsBought(true);

      if (date.month === 12) {
        setDate({ month: 1, year: date.year + 1 });
      } else {
        setDate({ month: date.month + 1, year: date.year });
      }
    }
  }

  return (
    <div
      onClick={clickHouse}
      className="h-[100px] w-[140px] bg-contain flex flex-col items-center text-[1rem] absolute cursor-pointer group"
      style={{
        top: top,
        left: left,
        backgroundImage: `url(/${isBought ? style + "_owned" : style}.png)`,
      }}
    >
      <div
        className={`invisible group-hover:visible text-center ${
          balance < cost ? "bg-[#6f6776]" : "bg-white"
        } border-4 p-[0.5rem] m-auto`}
      >
        <p>{!isBought ? "Buy: " + cost : "Owned"}</p>
        <p>Rent Income: {houseIncome}</p>
      </div>
    </div>
  );
}
