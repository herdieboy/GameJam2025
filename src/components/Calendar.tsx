import { useState } from "react";
import { useGlobalContext } from "../GlobalContext";
import Event from "./Event";

const monthNames = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export default function Calendar() {
  const { date, setDate, balance, setBalance, income } = useGlobalContext();
  const [showEvent, setShowEvent] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);

  function nextMonth() {
    if (date.month === 12) {
      setDate({ month: 1, year: date.year + 1 });
    } else {
      setDate({ month: date.month + 1, year: date.year });
    }
    setBalance(balance + income);
    setRandomNumber(Math.floor(Math.random() * 40));
    console.log("random number" + randomNumber);
    if (randomNumber < 20) {
      setShowEvent(true);
    }
  }

  return (
    <>
      <div className="absolute bottom-0 w-full h-[100px] flex justify-center items-center cursor-pointer">
        <div
          onClick={nextMonth}
          className="h-[100px] w-[140px] bg-[url(/calendar.png)] bg-contain flex justify-center items-center"
        >
          <p className="mt-[1.5rem]">{monthNames[date.month - 1]}</p>
        </div>
      </div>
      {showEvent && (
        <Event setShowEvent={setShowEvent} randomNumber={randomNumber} />
      )}
    </>
  );
}
