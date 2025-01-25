import { useGlobalContext } from "../GlobalContext";

export default function Wallet() {
  const { balance, income, date } = useGlobalContext();

  return (
    <>
      <div className="flex justify-center items-center gap-[2rem]">
        <div className="bg-white flex gap-[1rem] justify-end px-[1rem] w-[400px] text-right border-4 border-dkgrey">
          <p>ß {balance}</p>
        </div>
        <div className="text-[4rem] w-[100px] text-center">
          <p>{date.year}</p>
        </div>
        <div className="bg-white px-[1rem] flex gap-[0.5rem] w-[400px] border-4 border-dkgrey">
          <p className="text-[#6eaa78]">+ {income} </p>
        </div>
      </div>
      {balance < 0 ? (
        <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center text-[10rem] z-[99] text-[#9a4f50]">
          <p className="drop-shadow-[4px_4px_0_black]">GAME OVER</p>
          <a href="" className="text-[2rem] drop-shadow-[2px_2px_0_black]">
            Start Again
          </a>
        </div>
      ) : (
        <></>
      )}
      {date.year === 2007 ? (
        <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center text-[10rem] z-[99] text-[#7ca1c0]">
          <p className="drop-shadow-[4px_4px_0_black]">THE BUBBLE HAS BURST</p>
          <a href="" className="text-[2rem] drop-shadow-[2px_2px_0_black]">
            Start Again
          </a>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
