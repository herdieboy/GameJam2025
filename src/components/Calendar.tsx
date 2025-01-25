import { useGlobalContext } from "../GlobalContext";

/*interface DateType {
  month: number;
  year: number;
}

interface CalendarProps {
  nextMonth: () => void;
  date: DateType;
}*/

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
  const { date, setDate, balance, setBalance, income, expense } =
    useGlobalContext();

  function nextMonth() {
    if (date.month === 12) {
      setDate({ month: 1, year: date.year + 1 });
    } else {
      setDate({ month: date.month + 1, year: date.year });
    }
    setBalance(balance + (income - expense));
    console.log("month" + balance);
  }

  return (
    <div className="absolute bottom-0 w-full h-[100px] flex justify-center items-center cursor-pointer">
      <div
        onClick={nextMonth}
        className="h-[100px] w-[140px] bg-[url(/calendar.png)] bg-contain flex justify-center items-center"
      >
        <p className="mt-[1.5rem]">{monthNames[date.month - 1]}</p>
      </div>
    </div>
  );
}
