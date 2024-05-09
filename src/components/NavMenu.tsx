import Link from "next/link";

import React from "react";

export default function NavMenu() {
  return (
    <div className="flex gap-2 md:gap-8">
      <Link href="/">Tool</Link>
      <Link href="/wp">WP API</Link>
      <Link href="/article">Article</Link>
    </div>
  );
}
