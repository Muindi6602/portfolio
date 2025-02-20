import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="font-bold text-lg tracking-tight">
      TO<span className="text-primary">.</span>
    </Link>
  );
}
