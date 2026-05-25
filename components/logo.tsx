import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center">
      <Image
        src="/roshwealth-logo.png"
        alt="Roshwealth logo"
        width={525}
        height={128}
        priority
        className="h-auto w-[300px] md:w-[410px]"
      />
    </Link>
  );
}
