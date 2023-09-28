import { useUser } from "@clerk/nextjs";
import { Contract, getDefaultProvider } from "ethers";
import { useState } from "react";

export default function GetBalance() {
  const { user } = useUser();
  const [balance, setBalance] = useState(0);

  if (user?.primaryWeb3Wallet?.web3Wallet) {
    const provider = getDefaultProvider("sepolia");

    const abi = [
      // Read-Only Functions
      "function balanceOf(address owner) view returns (uint256)",
      "function decimals() view returns (uint8)",
      "function symbol() view returns (string)",

      // Authenticated Functions
      "function transfer(address to, uint amount) returns (bool)",

      // Events
      "event Transfer(address indexed from, address indexed to, uint amount)",
    ];
    // This can be an address or an ENS name
    const address = "0x7AD9C7f95192a787C083630F2592C74D6873FA00";
    // Read-Only; By connecting to a Provider, allows:
    // - Any constant function
    // - Querying Filters
    // - Populating Unsigned Transactions for non-constant methods
    // - Estimating Gas for non-constant (as an anonymous sender)
    // - Static Calling non-constant methods (as anonymous sender)
    const contract = new Contract(address, abi, provider);

    if (contract && typeof contract.balanceOf === "function") {
      contract
        .balanceOf(user?.primaryWeb3Wallet?.web3Wallet)
        .then((result) => {
          setBalance(Number(result) / 1000000);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div>
      <h1 className="mb-8">Balance $$$</h1>
      <h2>{balance > 0 ? balance : "???"} mUSDC</h2>
    </div>
  );
}
