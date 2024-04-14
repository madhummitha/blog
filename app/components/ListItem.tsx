import React from "react";
import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: BlogPost;
  category: string;
};

export default function ListItem({ post, category }: Props) {
  const { id, title, date, emoji } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="text-cyan-600/90 text-2xl mt-4" key={id}>
      <Link
        className="hover:text-cyan-700/90"
        href={`/categories/${category}/${id}`}
      >
        {emoji} {title}
      </Link>
    </li>
  );
}
