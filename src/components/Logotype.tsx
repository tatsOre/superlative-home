import Image from "next/image";
import Link from "next/link";

type Props = {
  small?: boolean;
};

export default function Logotype({ small }: Props) {
  const options = {
    small: { src: "/logo-small.svg", width: 170, height: 40 },
    large: { src: "/logo-large.svg", width: 295, height: 200 }
  };

  const attributes = small ? options.small : options.large;

  return (
    <Link href="/">
      <Image
        src={attributes.src}
        alt='superlative software logotype'
        height={attributes.height}
        width={attributes.width}
      />
    </Link>
  );
}
