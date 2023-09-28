import { useUser } from "@clerk/nextjs";

export default function MyContent() {
  const { user } = useUser();
  return (
    <div>
      <h1 className="mb-8">Add Content</h1>
      <div>
        <div>
          <label
            htmlFor="video_url"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Youtube video URL
          </label>
          <input
            type="text"
            id="video_url"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="https://www.youtube.com/watch?v=..."
            required
          />
        </div>
        <div>
          <label
            htmlFor="video_url"
            className="mb-2 mt-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Silent Data webhook URL
          </label>
          <input
            type="text"
            id="video_url"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="https://silentdata.io/webhook/..."
            required
          />
        </div>
        <div>
          <div className="mt-4">{}</div>
          <div>{user?.primaryWeb3Wallet?.web3Wallet}</div>
        </div>
      </div>
    </div>
  );
}
