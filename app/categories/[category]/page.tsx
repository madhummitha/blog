import React from "react";
import { getSortedPostsData } from "@/lib/posts";
import ListItem from "../../components/ListItem";
import Link from "next/link";
import GoBack from "@/app/components/GoBack";

export default function Category({ params }: { params: { category: string } }) {
  const { category } = params;
  const posts = getSortedPostsData(category);

  return (
    <section className=" mx-auto max-w-2xl">
      <Link href="/" className="px-6 prose prose-xl  text-white">
        <GoBack />
      </Link>
      <h2 className="text-4xl font-bold dark:text-slate-200 text-center">
        {category}
      </h2>
      <ul className="w-full mt-10">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} category={category} />
        ))}
      </ul>
    </section>
  );
}
