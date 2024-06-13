import { FormEventHandler, useCallback } from "react";
import { useWriteContract } from "wagmi";
import Link from "next/link";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TxHash from "./TxHash";
import { contract_abi, contract_address } from "../../constants";

export default function DayEight() {
  const { data: tx_hash, writeContract } = useWriteContract();

  function claim() {
    writeContract(
      {
        abi: contract_abi,
        address: contract_address,
        functionName: "claim",
        args: [],
      },
      {
        onError: (e) => {
          toast.error(`${e.cause}`, {
            position: "top-right",
          });
          console.table(e.name, e.cause);
        },
      }
    );
  }

  return (
    <div className="flex flex-col gap-0.5 my-1">
      <div className="my-20">
        <p>Congratulations on completing Klaytn Educate Series 🎉</p>
        <button
          className="bg-black rounded-xl text-white p-5 my-5"
          onClick={claim}
        >
          Mint NFT
        </button>
      </div>
      <section>
        <header>Transaction Hash:</header>
        <TxHash>{tx_hash}</TxHash>
      </section>
      <Link href="/" className="">
        Back Home
      </Link>
    </div>
  );
}
