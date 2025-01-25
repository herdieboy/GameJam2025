import { useState, useEffect } from "react";
//import Cursor from "./components/Cursor";
import Wallet from "./components/Wallet";
import House from "./components/House";
import Calendar from "./components/Calendar";

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
    expense,
    setExpense,
    date,
    setDate,
  };

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
    <div className="relative h-[720px] w-[1280px] text-[2rem] leading-none bg-[url(/map.png)] bg-contain cursor-default text-dkgrey select-none">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        income={income}
        expense={expense}
        setExpense={setExpense}
        date={date.year}
      />
      <House
        {...globalProps}
        cost={100000}
        houseIncome={2000}
        top="40px"
        left="80px"
        style="house1"
      />
      <House
        {...globalProps}
        cost={100000}
        houseIncome={2000}
        top="90px"
        left="180px"
        style="house2"
      />
      <House
        {...globalProps}
        cost={100000}
        houseIncome={2000}
        top="130px"
        left="80px"
        style="house3"
      />
      <House
        {...globalProps}
        cost={100000}
        houseIncome={2000}
        top="300px"
        left="205px"
        style="house3"
      />
      <House
        {...globalProps}
        cost={100000}
        houseIncome={2000}
        top="540px"
        left="160px"
        style="house3"
      />
      <House
        {...globalProps}
        cost={100000}
        houseIncome={2000}
        top="490px"
        left="80px"
        style="house3"
      />
      <House
        {...globalProps}
        cost={100000}
        houseIncome={2000}
        top="110px"
        left="890px"
        style="house3"
      />
      <House
        {...globalProps}
        cost={100000}
        houseIncome={2000}
        top="80px"
        left="990px"
        style="house3"
      />

      <House
        {...globalProps}
        cost={100000}
        houseIncome={2000}
        top="300px"
        left="480px"
        style="apartment"
      />
      <House
        {...globalProps}
        cost={100000}
        houseIncome={2000}
        top="380px"
        left="390px"
        style="apartment"
      />
      <House
        {...globalProps}
        cost={100000}
        houseIncome={2000}
        top="380px"
        left="390px"
        style="apartment"
      />
      <House
        {...globalProps}
        cost={100000}
        houseIncome={2000}
        top="420px"
        left="520px"
        style="apartment"
      />
      <House
        {...globalProps}
        cost={100000}
        houseIncome={2000}
        top="250px"
        left="650px"
        style="apartment"
      />
      <House
        {...globalProps}
        cost={100000}
        houseIncome={2000}
        top="330px"
        left="760px"
        style="apartment"
      />

      <House
        {...globalProps}
        cost={100000}
        houseIncome={2000}
        top="400px"
        left="1100px"
        style="castle"
      />
      <House
        {...globalProps}
        cost={100000}
        houseIncome={2000}
        top="520px"
        left="580px"
        style="castle"
      />

      <Calendar nextMonth={nextMonth} date={date} />
    </div>
  );
}
