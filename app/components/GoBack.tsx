"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const GoBack = () => {
  const router = useRouter();
  return (
    <div>
      <i>
        <span onClick={() => router.back()} className="cursor-pointer">
          <FaArrowLeft />
        </span>
      </i>
    </div>
  );
};

export default GoBack;
