import { useGlobalContext } from "../GlobalContext";
import Values from "../Values.json";

interface EventProps {
  randomNumber: number;
  setShowEvent: (show: boolean) => void;
}

export default function Event({ randomNumber, setShowEvent }: EventProps) {
  const { balance, setBalance } = useGlobalContext();
  const eventNumber = randomNumber < 21 ? randomNumber : 0;

  function handleButton() {
    setBalance(balance + Values.events[eventNumber].result);
    setShowEvent(false);
  }

  return (
    <div className="absolute text-center top-0 z-50 w-full h-full flex justify-center items-center">
      <div className="bg-white w-[500px] h-[500px] border-4 flex flex-col items-center justify-center">
        <h1>{Values.events[eventNumber].title}</h1>
        <p className="text-[1rem] p-[2rem]">
          {Values.events[eventNumber].description}
        </p>
        <button
          onClick={handleButton}
          className="bg-[#be955c] border-4 p-[0.5rem] cursor-pointer mt-[2rem]"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
