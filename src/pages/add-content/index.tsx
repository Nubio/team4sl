import { useUser } from "@clerk/nextjs";
import { type SyntheticEvent } from "react";
import { api } from "~/utils/api";

export default function MyContent() {
  const { user } = useUser();
  const addVideo = api.video.create.useMutation();

  function onCreate(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.stopPropagation();
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);
    addVideo.mutate(
      {
        silentDataWebhook: String(data.get("web_hook")),
        videoUrl: String(data.get("video_url")),
      },
      {
        onSuccess(data) {
          console.log(data);
        },
      }
    );
    return false;
  }

  return (
    <div>
      <h1 className="mb-8">Content</h1>
      <form onSubmit={onCreate}>
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
            name="video_url"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="https://www.youtube.com/watch?v=..."
            required
          />
        </div>
        <div>
          <label
            htmlFor="web_hook"
            className="mb-2 mt-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Silent Data webhook URL
          </label>
          <input
            type="text"
            id="web_hook"
            name="web_hook"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="https://silentdata.io/webhook/..."
            required
          />
        </div>
        <div>
          <div className="mt-4">{}</div>
          <div>Wallet {user?.primaryWeb3Wallet?.web3Wallet}</div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="mb-2 mr-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            Add content
          </button>
        </div>
      </form>
    </div>
  );
}
