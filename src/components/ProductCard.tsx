import Image from "next/image";
import ProviderBadge from "./ProviderBadge";
import ExternalLink from "./ExternalLink";

type Props = {
  title: string;
  description: string;
  logoSrc: string;
  thumbnailSrc: string;
  href: string;
  hrefAppStore: string;
  hrefGooglePlay: string;
};

export default function ProductCard({
  title,
  description,
  logoSrc,
  thumbnailSrc,
  href,
  hrefAppStore,
  hrefGooglePlay
}: Props) {
  return (
    <article className="basis-full md:basis-[48%] lg:max-w-[500px] flex flex-col">
      <div className="flex-1 bg-dark-gray rounded-[40px] p-10 pl-5 pt-5 mb-8 xs:flex flex-wrap items-center">
        <h3 className="sr-only">{title}</h3>

        <div className="relative bg-dark-gray-light rounded-2xl p-4 mb-4 xs:mb-0 xs:w-36 xs:h-36 xl:w-44 xl:h-44">
          <Image
            src={thumbnailSrc}
            alt={`${title} thumbnail`}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>

        <div className="relative basis-1/2 ml-auto" data-product={title}>
          <Image
            src={logoSrc}
            alt={`${title} logo`}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>

        <p className="font-light text-center text-lg lg:text-2xl mx-6 mt-6">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap justify-between gap-4">

        <div className="block basis-[45%] h-[70px]">
          <ExternalLink href={hrefAppStore} title="" >
            <ProviderBadge provider="AppStore" />
          </ExternalLink>
        </div>

        <div className="block basis-[50%] h-[70px]">
          <ExternalLink href={hrefGooglePlay} title="">
            <ProviderBadge provider="GooglePlay" />
          </ExternalLink>
        </div>

        <ExternalLink href={href} className="block mx-auto mt-4">
          <span className='bg-accent text-black font-bold text-[24px] py-2 px-6 rounded-full text-center'>
            Ver más...
          </span>
        </ExternalLink>
      </div>
    </article>
  );
}
