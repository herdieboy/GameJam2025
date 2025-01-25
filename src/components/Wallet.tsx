import Bank from "../components/Bank";

export default function Wallet({
  balance,
  incoming,
  outgoing,
  date,
}: {
  balance: number;
  incoming: number;
  outgoing: number;
  date: number;
}) {
  return (
    <div className="flex justify-center items-center gap-[2rem]">
      <div className="bg-white flex gap-[1rem] justify-end px-[1rem] w-[500px] text-right">
        <Bank />
        <p>ß {balance} bubs</p>
      </div>
      <div className="text-[4rem] w-[100px] text-center">
        <p>{date}</p>
      </div>
      <div className="bg-white px-[1rem] flex gap-[0.5rem] w-[500px]">
        <p className="text-[#6eaa78]">+ {incoming} </p>
        <p className="text-[#9a4f50]">- {outgoing} </p>
        <p>= {incoming - outgoing}</p>
      </div>
    </div>
  );
}
