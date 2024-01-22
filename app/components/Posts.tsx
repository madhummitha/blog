import React from "react";
import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";
import Image from "next/image";

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <div className="text-center mt-4">
        <h2 className="text-4xl font-bold dark:text-slate-300">Blog Posts</h2>
      </div>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
