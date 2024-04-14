import Categories from "./components/Categories";

export default function Home() {
  return (
    <main className="mx-auto mt-8">
      <h2 className="text-4xl font-bold dark:text-slate-200 text-center">
        Blog Posts
      </h2>
      <Categories />
    </main>
  );
}
