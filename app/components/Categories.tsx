import React from "react";
import { getCategoryData } from "@/lib/posts";
import ListItem from "./ListItem";
import Link from "next/link";

export default function Categories() {
  const categories = getCategoryData();
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <div className="flex">
        <ul className="w-full">
          {categories.map((category, i) => (
            <li key={i} className="mb-4 mt-4">
              <Link
                className="text-cyan-600 hover:text-cyan-700/90 text-2xl font-semibold"
                href={`categories/${category}`}
              >
                📃 {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
