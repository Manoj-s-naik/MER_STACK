import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex-wrap  justify-center items-center">
        <div className="inline-block">
          i am learning next js
        </div>
          <ul className="flex gap-4">
            <Link href="/about">About</Link>
            <Link href="/contact">contact</Link>
            <Link href="/about/me">ME</Link>
          </ul>
      </div>
    </>
  );
}
