import Head from "next/head";
import { useAccount } from "wagmi";

import ConnectWalletBtn from "@/components/ConnectWalletBtn";
import DayOne from "@/components/DayOne";
import DayTwo from "@/components/DayTwo";
import DayThree from "@/components/DayThree";
import DayFour from "@/components/DayFour";
import DayFive from "@/components/DayFive";
import DaySix from "@/components/DaySix";
import DaySeven from "@/components/DaySeven";
import DayEight from "@/components/DayEight";
import DayNine from "@/components/DayNine";
import DayTen from "@/components/DayTen";
import NavBar from "@/components/NavBar";

export default function App() {
  const { address, isConnected } = useAccount();

  return (
    <div className="max-w-screen-md px-5 mt-10 flex flex-wrap mx-auto gap-8 overflow-hidden break-words">
      <Head>
        <title>KES Attendance Marker</title>
      </Head>
      <div className="flex flex-row justify-between justify-items-center w-full">
        <h1 className="text-black text-2xl py-1">Mark Attendance | KES </h1>
        <ConnectWalletBtn />
      </div>
      {address && (
        <div>
       <>
         <NavBar />
       </>
        <div className="flex flex-row gap-9">
          <div className="my-3">
            <DayOne />
            <DayTwo />
            <DayThree />
            <DayFour />
            <DayFive />
          </div>

          <div className="my-3">
          <DaySix />
          <DaySeven />
          <DayEight />
          <DayNine />
          <DayTen />
          </div>
          </div>
          </div>
                )}
    </div>
  );
}
