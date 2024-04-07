import React from "react";
import { getSortedPostsData } from "@/lib/posts";
import ListItem from "../../components/ListItem";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Category({ params }: { params: { category: string } }) {
  const { category } = params;
  const posts = getSortedPostsData(category);

  return (
    <section className=" mx-auto max-w-2xl">
      <Link href="/" className="px-6 prose prose-xl  text-white">
        <FaHome />
      </Link>
      {/* <div className="t"> */}
      <h2 className="text-4xl font-bold dark:text-slate-200 text-center">
        Posts
      </h2>
      {/* </div> */}
      <ul className="w-full mt-10">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} category={category} />
        ))}
      </ul>
    </section>
  );
}
