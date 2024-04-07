import React from "react";
import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";
import Image from "next/image";

export default function Posts({ params }: { params: { category: string } }) {
  const { category } = params;
  const posts = getSortedPostsData();
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <div className="text-center mt-4">
        <h2 className="text-4xl font-bold dark:text-slate-200/90">
          Blog Posts
        </h2>
      </div>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} category={category} />
        ))}
      </ul>
    </section>
  );
}
