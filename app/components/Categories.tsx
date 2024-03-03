import React from "react";
import { getCategoryData } from "@/lib/posts";
import ListItem from "./ListItem";
import Link from "next/link";

export default function Categories() {
  const categories = getCategoryData();
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <ul className="w-full">
        {categories.map((category, i) => (
          <Link
            key={i}
            className="underline hover:text-cyan-700/90"
            href={`categories/${category}`}
          >
            {category}
          </Link>
        ))}
      </ul>
    </section>
  );
}
