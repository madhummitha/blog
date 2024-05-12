import Categories from "./components/Categories";

export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-56px)]">
      <h2 className="text-4xl font-bold dark:text-slate-200 text-center mt-8">
        Blog Posts
      </h2>
      <div className="flex-grow flex justify-center">
        <Categories />
      </div>
    </div>
  );
}
