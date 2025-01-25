import Values from "../Values.json";

export default function Event() {
  return (
    <div className="absolute z-50 w-full h-full flex justify-center items-center">
      <div className="bg-white w-[500px] h-[500px] border-4 flex flex-col items-center justify-center">
        <h1>{Values.events[0].title}</h1>
        <p className="text-[1rem]">{Values.events[0].description}</p>
        <button className="bg-[#be955c] border-4 p-[0.5rem] cursor-pointer mt-[2rem]">
          CONTINUE
        </button>
      </div>
    </div>
  );
}
