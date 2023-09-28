import { useCallback } from "react";
import { useUser, useAuth } from "@clerk/nextjs";
import { api } from "~/utils/api";

export default function Home() {
  const { user } = useUser();

  const hello = api.example.hello.useQuery({ text: "hello" });

  const refreshSilentData = useCallback(() => {}, []);

  return (
    <>
      <h1 className="mb-8 mt-12 text-4xl font-extrabold">
        Our little kittens enjoying farm life
      </h1>
      <iframe
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        width="788.54"
        height="443"
        type="text/html"
        src="https://www.youtube.com/embed/7yLxxyzGiko?autoplay=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
      ></iframe>
      {/* <div>Wallet {user?.primaryWeb3Wallet?.web3Wallet}</div>
      <div>Verified: {user?.primaryWeb3Wallet?.verification.status}</div>
      <div>Greeting: {hello.data?.greeting}</div> */}
      <div className="mt-8">
        <button
          type="button"
          title="Sign out"
          className="mb-2 mr-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          onClick={refreshSilentData}
        >
          Call Silent webhook for the current video
        </button>
      </div>
    </>
  );
}
