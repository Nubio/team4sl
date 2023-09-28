import { useUser, useAuth } from "@clerk/nextjs";

import { ToolBar } from "../components/ui/topbar";

export default function Home() {
  const { user } = useUser();
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <div>Not signed in</div>;
  }

  return <div>{user?.primaryWeb3Wallet?.web3Wallet}</div>;
}
