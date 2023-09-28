import { useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";


export default function Home() {
  const { user } = useUser();


  return (
    <>
      <h1>Home</h1>
    </>
  );
}
