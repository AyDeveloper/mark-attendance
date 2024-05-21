import { FormEventHandler, useCallback } from "react";
import { useWriteContract } from "wagmi";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TxHash from "./TxHash";

import { contract_abi, contract_address } from "../../constants";


export default function DaySeven() {
  const { data: tx_hash, writeContract } = useWriteContract();

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    async (ev) => {
      ev.preventDefault();

      const form_data = new FormData(ev.currentTarget);
      const secretCode = form_data.get("secretCode");
      if (!secretCode) return;

      writeContract(
        {
          abi: contract_abi,
          address: contract_address,
          functionName: "submitDaySeven",
          args: [secretCode.toString()],
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
    },
    []
  );

  return (
    <form className="flex flex-col gap-0.5 my-1" onSubmit={onSubmit}>
      <h2 className="border-b-2 border-blue-100 my-3">Day Seven</h2>

      <button className="text-start" type="submit">
        <h2 className="text-lg underline">
          (<span className="font-mono">Submit Secret Code</span>)
        </h2>
      </button>
      <label>
        {"Secret Code: "}
        <input defaultValue="" name="secretCode" required type="text" />
        {"cap locks"}
      </label>

      <hr />
      <section>
        <header>Transaction Hash:</header>
        <TxHash>{tx_hash}</TxHash>
      </section>
    </form>
  );
}
