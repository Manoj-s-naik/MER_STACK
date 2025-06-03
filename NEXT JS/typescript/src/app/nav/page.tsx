"use-client";
import React from "react";

import Link from "next/link";

function Nav() {
  return (
    <>
      <div className="flex gap-[8rem] bg-blue-200">
        <Link href="/product">product</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </>
  );
}

export default Nav;
