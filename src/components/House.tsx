import { useState } from "react";
import { useGlobalContext } from "../GlobalContext";

interface HouseProps {
  cost: number;
  houseIncome: number;
  upCost: number;
  upIncome: number;
  top: string;
  left: string;
  style: string;
}

export default function House({
  cost,
  houseIncome,
  upCost,
  upIncome,
  top,
  left,
  style,
}: HouseProps) {
  const { balance, setBalance, income, setIncome, setDate, date } =
    useGlobalContext();
  const [isBought, setIsBought] = useState(false);
  const [isUpgraded, setIsUpgraded] = useState(false);

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
    } else if (isBought && !isUpgraded) {
      setBalance(balance - upCost + income);
      setIncome(income + upIncome);
      setIsUpgraded(true);

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
        backgroundImage: `url(/${
          isBought && !isUpgraded
            ? style + "_owned"
            : isUpgraded
            ? style + "_upgraded"
            : style
        }.png)`,
      }}
    >
      {isBought && isUpgraded ? (
        <></>
      ) : (
        <div
          className={`invisible group-hover:visible text-center ${
            !isBought && balance < cost
              ? "bg-[#6f6776]"
              : isBought && !isUpgraded && balance < upCost
              ? "bg-[#6f6776]"
              : "bg-white"
          } border-4 p-[0.5rem] m-auto`}
        >
          <p>{!isBought ? "Buy: " + cost : "Upgrade: " + upCost}</p>
          <p>Added Income: {!isBought ? houseIncome : upIncome}</p>
        </div>
      )}
    </div>
  );
}
