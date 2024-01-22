import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { FaHome } from "react-icons/fa";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({ postId: post.id }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    return {
      title: "Post not found",
    };
  }
  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);
  const pubDate = getFormattedDate(date);
  return (
    <main className="px-6 prose prose-xl prose-slate dark: prose-invert mx-auto mt-4">
      <p>
        <Link href="/" className="">
          <FaHome />
        </Link>
      </p>
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </main>
  );
}
