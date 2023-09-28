import { useUser } from "@clerk/nextjs";
import { getDefaultProvider } from "ethers";
import { useState } from "react";

export default function GetBalance() {
  const { user } = useUser();
  const [balance, setBalance] = useState(0)

  if (user?.primaryWeb3Wallet?.web3Wallet) {
    const provider = getDefaultProvider('sepolia');
    provider
      .getBalance(user?.primaryWeb3Wallet?.web3Wallet)
      .then(result => {
        setBalance(Number(result) / 1000000000000000000)
      })
      .catch(err => {
        console.log(err)
      });
  }

  return (
    <div>
      <h1 className="mb-8">Get balance</h1>
      <h2>{balance} SepoliaETH</h2>
    </div>
  );
}
