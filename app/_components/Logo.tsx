import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="mr-5">
      <p className="relative font-semibold text-4xl">
        ReadIt<span className="text-5xl">.</span>
      </p>
    </Link>
  );
}
