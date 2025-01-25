import { GlobalProvider } from "./GlobalContext";
import Wallet from "./components/Wallet";
import House from "./components/House";
import Calendar from "./components/Calendar";

export default function App() {
  return (
    <GlobalProvider>
      <div className="relative h-[720px] w-[1280px] text-[2rem] leading-none bg-[url(/map.png)] bg-contain cursor-default text-dkgrey select-none">
        <Wallet />
        <House
          cost={80000}
          houseIncome={3000}
          top="400px"
          left="240px"
          style="house1"
        />
        <House
          cost={80000}
          houseIncome={3000}
          top="90px"
          left="180px"
          style="house2"
        />
        <House
          cost={80000}
          houseIncome={3000}
          top="130px"
          left="80px"
          style="house3"
        />
        <House
          cost={80000}
          houseIncome={3000}
          top="300px"
          left="205px"
          style="house3"
        />
        <House
          cost={80000}
          houseIncome={3000}
          top="540px"
          left="160px"
          style="house3"
        />
        <House
          cost={80000}
          houseIncome={3000}
          top="490px"
          left="80px"
          style="house3"
        />
        <House
          cost={80000}
          houseIncome={3000}
          top="110px"
          left="890px"
          style="house3"
        />
        <House
          cost={80000}
          houseIncome={3000}
          top="80px"
          left="990px"
          style="house3"
        />

        <House
          cost={200000}
          houseIncome={10000}
          top="300px"
          left="480px"
          style="apartment"
        />
        <House
          cost={200000}
          houseIncome={10000}
          top="380px"
          left="390px"
          style="apartment"
        />
        <House
          cost={200000}
          houseIncome={10000}
          top="380px"
          left="390px"
          style="apartment"
        />
        <House
          cost={200000}
          houseIncome={10000}
          top="420px"
          left="520px"
          style="apartment"
        />
        <House
          cost={200000}
          houseIncome={10000}
          top="250px"
          left="650px"
          style="apartment"
        />
        <House
          cost={200000}
          houseIncome={10000}
          top="330px"
          left="760px"
          style="apartment"
        />

        <House
          cost={1000000}
          houseIncome={500000}
          top="400px"
          left="1100px"
          style="castle"
        />
        <House
          cost={1000000}
          houseIncome={500000}
          top="520px"
          left="580px"
          style="castle"
        />

        <Calendar />
      </div>
    </GlobalProvider>
  );
}
