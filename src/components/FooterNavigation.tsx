'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ExternalLink from './ExternalLink';
import Link from 'next/link';

export default function FooterNavigation() {
  const t = useTranslations('Navigation');

  const keys = ['services', 'portfolio', 'team', 'contact'] as const;

  const renderedLinks = keys.map((key) => (
    <Link
      key={key}
      href={t(`${key}.href`)}
      className='font-semibold text-xl'
    >
      {t(`${key}.label`)}
    </Link>
  ));

  return (
    <nav className="flex flex-col gap-y-2.5 gap-x-6 md:flex-row md:justify-evenly min-[1100px]:flex-col">
      {renderedLinks}
      <ExternalLink
        aria-label="Chat on WhatsApp"
        href="https://wa.me/573185241871"
        className='block flex items-center'
      >
        <div aria-hidden="true" className="mr-1.5">
          <Image src="/icon-media-whatsapp.svg" alt="WhatsApp Icon" height={22} width={22} />
        </div>
        +57 318 5241871
      </ExternalLink>
    </nav>
  );
}
