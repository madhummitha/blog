import Image from "next/image";
import Posts from "./components/Posts";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <main className="mx-auto mt-4">
      <h2 className="text-4xl font-bold dark:text-slate-200 text-center">
        Blog Posts
      </h2>
      <Categories />
      {/* <Posts /> */}
    </main>
  );
}
