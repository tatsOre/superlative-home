import ExternalLink from "./ExternalLink";
import Figure from "./Figure";
import ProviderBadge from "./ProviderBadge";

type ProductCardProps = {
  title: string;
  description: string;
  logoSrc: string;
  thumbnailSrc: string;
  href: string;
  hrefAppStore: string;
  hrefGooglePlay: string;
  linkLabel: string;
};

export default function ProductCard({
  title,
  description,
  logoSrc,
  thumbnailSrc,
  href,
  hrefAppStore,
  hrefGooglePlay,
  linkLabel
}: ProductCardProps) {
  return (
    <article className="basis-full md:basis-[48%] lg:max-w-[500px] flex flex-col">
      <div className="flex-1 bg-dark-gray rounded-3xl xs:rounded-[25px] lg:rounded-[40px] p-2 xs:p-5 md:p-3 lg:p-5 flex flex-wrap items-start">
        <h3 className="sr-only">{title}</h3>

        {/* Product Thumbnail */}
        <Figure
          src={thumbnailSrc}
          alt={`${title} thumbnail`}
          className="relative bg-dark-gray-light rounded-2xl p-2 xs:p-4 mb-4 w-5/12"
        />

        {/* Product Logo */}
        <Figure
          src={logoSrc}
          alt={`${title} logo`}
          className="relative w-1/2 pr-4 ml-auto self-center"
          data-product={title}
        />

        {/* Product Description */}
        <p className="font-light text-center text-lg m-4 lg:mx-6 xl:text-2xl">
          {description}
        </p>
      </div>

      {/* Product Links */}
      <div className="flex flex-wrap justify-between mt-6">
        <div className="block w-[45%] h-[60px]">
          <ExternalLink href={hrefAppStore} title="">
            <ProviderBadge provider="AppStore" />
          </ExternalLink>
        </div>

        <div className="block w-[50%] h-[60px]">
          <ExternalLink href={hrefGooglePlay} title="">
            <ProviderBadge provider="GooglePlay" />
          </ExternalLink>
        </div>

        <ExternalLink href={href} className="block mx-auto mt-6">
          <span className="inline-block bg-accent hover:bg-white text-black font-bold py-2 px-8 text-2xl lg:text-xl rounded-full">
            {linkLabel}
          </span>
        </ExternalLink>
      </div>
    </article>
  );
}
