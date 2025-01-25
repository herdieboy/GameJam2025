import Bank from "../components/Bank";

interface WalletProps {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  expense: number;
  setExpense: React.Dispatch<React.SetStateAction<number>>;
  income: number;
  date: number;
}

export default function Wallet({
  balance,
  setBalance,
  income,
  expense,
  setExpense,
  date,
}: WalletProps) {
  return (
    <div className="flex justify-center items-center gap-[2rem]">
      <div className="bg-white flex gap-[1rem] justify-end px-[1rem] w-[500px] text-right border-4 border-dkgrey">
        <Bank
          balance={balance}
          setBalance={setBalance}
          expense={expense}
          setExpense={setExpense}
        />
        <p>ß {balance} bubs</p>
      </div>
      <div className="text-[4rem] w-[100px] text-center">
        <p>{date}</p>
      </div>
      <div className="bg-white px-[1rem] flex gap-[0.5rem] w-[500px] border-4 border-dkgrey">
        <p className="text-[#6eaa78]">+ {income} </p>
        <p className="text-[#9a4f50]">- {expense} </p>
        <p>= {income - expense}</p>
      </div>
    </div>
  );
}
