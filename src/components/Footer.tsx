'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import ExternalLink from './ExternalLink';
import FooterNavigation from './FooterNavigation';
import InternalLink from './Link';

export default function Footer() {
  const t = useTranslations('Footer');

  // Temporary styling while "Team section" is introduced again:
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/es";

  const renderedMediaIcons = [
    {
      src: "/icon-media-ig.svg",
      href: "#",
      title: "Visit our Instagram Page"
    },
    {
      src: "/icon-media-x.svg",
      href: "#",
      title: "Visit our X Page"
    },
    {
      src: "/icon-media-fb.svg",
      href: "#",
      title: "Visit our Facebook Page"
    }
  ].map(({ src, href, title }) => (
    <ExternalLink key={title} href={href} title={title}>
      <Image src={src} alt={title} width={40} height={40} aria-hidden="true" />
    </ExternalLink>
  ))

  return (
    <footer className={clsx(!isHome && 'bg-dark-gray', 'py-24')}>
      <div className="container flex flex-col items-center gap-y-[4.25rem] lg:flex-row lg:flex-wrap lg:justify-between lg:items-end">

        <Image
          src="/logo-large-b.svg"
          alt='superlative software logotype'
          width={295}
          height={200}
        />

        <div className='flex flex-col items-center gap-y-6 lg:flex-1'>
          <p className='text-3xl xl:text-4xl text-center'>
            {t.rich('tagline', { highlight: (chunks) => <b>{chunks}</b> })}
          </p>

          <InternalLink href='/contact' roundedFull>{t('contactLink')}</InternalLink>

          <div className='flex gap-x-2.5'>
            {renderedMediaIcons}
          </div>
        </div>

        <FooterNavigation />

        <p className='text-sm w-72 sm:w-full md:basis-full text-center'>
          {t.rich('smallprint', { br: () => <br /> })}
        </p>
      </div>
    </footer>
  );
}
