import { api } from "~/utils/api";

export default function DeleteAll() {
  api.video.deleteAll.useQuery();

  return <div>Nothing to show here</div>;
}
