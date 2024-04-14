import React from "react";
import { getCategoryData } from "@/lib/posts";
import { categoryEmoji } from "@/lib/emojis";
import Link from "next/link";
import Image from "next/image";
import { categoryImage } from "@/lib/images";

export default function Categories() {
  const categories = getCategoryData();
  return (
    <section className="mt-12 mx-auto max-w-2xl">
      <div className="grid grid-cols-3 gap-8">
        {categories.map((category, i) => (
          <div key={i} className="relative">
            <Link href={`categories/${category}`}>
              <div className="group cursor-pointer">
                <div className="relative">
                  <Image
                    src={categoryImage(category)}
                    alt={`Image for ${category}`}
                    className="rounded-md transition-transform duration-300 transform group-hover:scale-105"
                    height={200}
                    width={200}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-md">
                    <span className="text-white text-lg font-semibold">
                      Explore {category}
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <span className="text-cyan-600 text-2xl font-semibold">
                    {categoryEmoji(category)} {category}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
