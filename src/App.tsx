import { useEffect, useState } from "react";
import { GlobalProvider } from "./GlobalContext";
import Wallet from "./components/Wallet";
import House from "./components/House";
import Calendar from "./components/Calendar";
import backgroundMusic from "/BubbleBurst.mp3";

export default function App() {
  const [divScale, setDivScale] = useState(0);

  useEffect(() => {
    function resizeScreen() {
      const heightRatio = window.innerHeight / 720;
      //const widthRatio = window.innerWidth / 1280;

      const newScale =
        window.innerHeight - 720 < window.innerWidth - 1280
          ? heightRatio
          : heightRatio;
      setDivScale(newScale);
    }

    resizeScreen();
    window.addEventListener("resize", resizeScreen);

    return () => {
      window.removeEventListener("resize", resizeScreen);
    };
  }, []);

  useEffect(() => {
    const audio = document.getElementById(
      "background-music"
    ) as HTMLAudioElement;
    if (audio) {
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
  }, []);

  return (
    <GlobalProvider>
      <div
        className="relative h-[720px] w-[1280px] text-[2rem] leading-none bg-[url(/map.png)] bg-contain cursor-default text-dkgrey select-none"
        style={{ transform: `scale(${divScale})` }}
      >
        <audio id="background-musi" src={backgroundMusic} autoPlay loop />
        <Wallet />

        <House
          cost={100000}
          houseIncome={5000}
          upCost={25000}
          upIncome={2500}
          top="90px"
          left="180px"
          style="house1"
        />
        <House
          cost={100000}
          houseIncome={5000}
          upCost={25000}
          upIncome={2500}
          top="130px"
          left="80px"
          style="house1"
        />
        <House
          cost={110000}
          houseIncome={6000}
          upCost={28000}
          upIncome={3000}
          top="300px"
          left="205px"
          style="house2"
        />
        <House
          cost={110000}
          houseIncome={6000}
          upCost={28000}
          upIncome={3000}
          top="400px"
          left="240px"
          style="house2"
        />
        <House
          cost={80000}
          houseIncome={3000}
          upCost={20000}
          upIncome={1500}
          top="540px"
          left="160px"
          style="house3"
        />
        <House
          cost={80000}
          houseIncome={3000}
          upCost={20000}
          upIncome={1500}
          top="490px"
          left="80px"
          style="house3"
        />
        <House
          cost={90000}
          houseIncome={4000}
          upCost={23000}
          upIncome={2000}
          top="110px"
          left="890px"
          style="house4"
        />
        <House
          cost={90000}
          houseIncome={4000}
          upCost={23000}
          upIncome={2000}
          top="80px"
          left="990px"
          style="house4"
        />

        <House
          cost={200000}
          houseIncome={15000}
          upCost={50000}
          upIncome={7500}
          top="300px"
          left="480px"
          style="apartment"
        />
        <House
          cost={200000}
          houseIncome={15000}
          upCost={50000}
          upIncome={7500}
          top="380px"
          left="390px"
          style="apartment"
        />
        <House
          cost={200000}
          houseIncome={15000}
          upCost={50000}
          upIncome={7500}
          top="420px"
          left="520px"
          style="apartment"
        />
        <House
          cost={180000}
          houseIncome={10000}
          upCost={45000}
          upIncome={5000}
          top="250px"
          left="650px"
          style="apartment"
        />
        <House
          cost={180000}
          houseIncome={10000}
          upCost={45000}
          upIncome={5000}
          top="330px"
          left="760px"
          style="apartment"
        />

        <House
          cost={1000000}
          houseIncome={500000}
          upCost={250000}
          upIncome={250000}
          top="400px"
          left="1100px"
          style="castle"
        />
        <House
          cost={1000000}
          houseIncome={500000}
          upCost={250000}
          upIncome={250000}
          top="520px"
          left="580px"
          style="castle"
        />

        <Calendar />
      </div>
    </GlobalProvider>
  );
}
