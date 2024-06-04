import React from "react";
import Link from "next/link";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-3 sticky top-0 h-14">
      <div className="prose prose-xl mx-auto flex justify-between items-center sm:flex-row">
        <Link href="/" className="text-white/90 no-underline hover:text-white">
          Madhummitha R
        </Link>
        <div className="flex flex-row justify-center sm:justify-evenly items-center ml-auto text-white text-2xl lg:text-3xl">
          <Link
            className="text-white/90 hover:text-white pr-2"
            href="https://www.github.com/madhummitha"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/90 hover:text-white pr-2"
            href="https://www.linkedin.com/madhummitha"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://madhummitha.vercel.app/"
            target="_blank"
          >
            <FaGlobe />
          </Link>
        </div>
      </div>
    </nav>
  );
}
