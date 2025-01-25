import { useGlobalContext } from "../GlobalContext";

export default function Wallet() {
  const { balance, income, expense, date } = useGlobalContext();

  return (
    <div className="flex justify-center items-center gap-[2rem]">
      <div className="bg-white flex gap-[1rem] justify-end px-[1rem] w-[400px] text-right border-4 border-dkgrey">
        <p>ß {balance}</p>
      </div>
      <div className="text-[4rem] w-[100px] text-center">
        <p>{date.year}</p>
      </div>
      <div className="bg-white px-[1rem] flex gap-[0.5rem] w-[400px] border-4 border-dkgrey">
        <p className="text-[#6eaa78]">+ {income} </p>
        <p className="text-[#9a4f50]">- {expense} </p>
        <p>= {income - expense}</p>
      </div>
    </div>
  );
}
