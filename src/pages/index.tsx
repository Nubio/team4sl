import { useUser, useAuth } from "@clerk/nextjs";
import { api } from "~/utils/api";

export default function Home() {
  const { user } = useUser();

  const hello = api.example.hello.useQuery({ text: "hello" });

  return (
    <>
      <h1>Home</h1>
      <div>Wallet {user?.primaryWeb3Wallet?.web3Wallet}</div>
      <div>Verified: {user?.primaryWeb3Wallet?.verification.status}</div>
      <div>Greeting: {hello.data?.greeting}</div>
    </>
  );
}
