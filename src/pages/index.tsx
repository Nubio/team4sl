import { api } from "~/utils/api";

export default function Home() {
  const video = api.video.getVideo.useQuery();
  const refreshWebHook = api.video.triggerHook.useMutation();

  const refreshSilentData = () => {
    refreshWebHook.mutate(undefined, {
      onError(error) {
        console.error(error);
      },
      onSuccess(data) {
        console.log("response", data);
      },
    });
  };

  return (
    <>
      <h1 className="mb-8 mt-12 text-4xl font-extrabold">Our popular video</h1>
      {video?.data?.videoUrl && (
        <iframe
          scrolling="no"
          width="788.54"
          height="443"
          src={video.data?.videoUrl}
        ></iframe>
      )}
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
