'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import ExternalLink from './ExternalLink';
import FooterNavigation from './FooterNavigation';
import InternalLink from './Link';
import Logotype from './Logotype';

export default function Footer() {
  const t = useTranslations('Footer');
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '/es';

  const renderedMediaIcons = [
    {
      src: '/icon-media-ig.svg',
      href: '#',
      title: 'Visit our Instagram Page',
    },
    {
      src: '/icon-media-x.svg',
      href: '#',
      title: 'Visit our X Page',
    },
    {
      src: '/icon-media-fb.svg',
      href: '#',
      title: 'Visit our Facebook Page',
    },
  ].map(({ src, href, title }) => (
    <ExternalLink key={title} href={href} title={title}>
      <Image src={src} alt={title} width={40} height={40} aria-hidden="true" />
    </ExternalLink>
  ));

  return (
    <footer className={clsx({ 'bg-dark-gray': !isHome }, 'py-24')}>
      <div className="container flex flex-col items-center gap-y-20 lg:flex-row lg:flex-wrap lg:items-end lg:gap-x-16 xl:gap-x-4">

        <div className='footer-logotype'>
          <Logotype />
        </div>

        <div className="footer-contact lg:flex-1 flex flex-col items-center gap-y-6">
          <p className="text-3xl xl:text-4xl text-center text-balance">
            {t.rich('tagline', { highlight: (chunks) => <b>{chunks}</b> })}
          </p>

          <InternalLink href="/contact" small roundedFull>
            {t('contactLink')}
          </InternalLink>

          <div className="flex gap-x-2.5">{renderedMediaIcons}</div>
        </div>

        <div className='footer-nav md:basis-full min-[1100px]:basis-[200px] xl:basis-[280px] xl:pl-10'>
          <FooterNavigation />
        </div>

        <p className="text-sm w-72 sm:w-full md:basis-full text-center">
          {t.rich('smallprint', { br: () => <br /> })}
        </p>
      </div>
    </footer>
  );
}
