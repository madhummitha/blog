import Image from "next/image";
import Posts from "./components/Posts";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <main>
      <Categories />
      {/* <Posts /> */}
    </main>
  );
}
