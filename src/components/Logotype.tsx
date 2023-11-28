import Image from "next/image";
import Link from "next/link";

type LogotypeOptions = {
  src: string;
  width: number;
  height: number;
};

type LogotypeProps = {
  small?: boolean;
};

const logotypeOptions: Record<string, LogotypeOptions> = {
  small: { src: "/logo-small.svg", width: 170, height: 40 },
  large: { src: "/logo-large.svg", width: 285, height: 190 },
};

export default function Logotype({ small }: LogotypeProps) {
  const selectedOptions = small ? logotypeOptions.small : logotypeOptions.large;

  return (
    <Link href="/">
      <Image
        src={selectedOptions.src}
        alt='Superlative Software Logotype'
        height={selectedOptions.height}
        width={selectedOptions.width}
      />
    </Link>
  );
}
