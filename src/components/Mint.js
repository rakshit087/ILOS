import abi from "../artifacts/src/contracts/ILoveOpenSource.sol/ILoveOpenSource.json";
import { ethers } from "ethers";
import { useSession } from "next-auth/react";

const contract_address = "0x5F5005a3f180c7EB115C0E06D701d414D85C24B8";

export const MintButton = () => {
  const { data: session } = useSession();
  const token = session.accessToken;
  const username = session.user.name;
  return (
    <button
      className="flex items-center justify-center w-64 py-1 mb-4 text-white bg-green-600 rounded-md dark:bg-green-400 dark:text-black"
      onClick={async () => {
        const eth = await window.ethereum;
        await eth.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contract_address, abi.abi, signer);
        const txn = contract.mint(token, username);
        alert("Minted ILOS tokens! (will fix this alert later)");
      }}
    >
      Mint ILOS
    </button>
  );
};
