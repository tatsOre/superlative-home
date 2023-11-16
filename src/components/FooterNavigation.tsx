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
      children={t(`${key}.label`)}
      className='font-semibold text-2xl'
    />
  ))

  return (
    <nav className="flex flex-col gap-y-2.5 gap-x-5 md:basis-full md:flex-row md:justify-evenly lg:flex-col lg:basis-[290px] lg:pl-8">
      {renderedLinks}
      <ExternalLink
        aria-label="Chat on WhatsApp"
        href="https://wa.me/573185241871"
        className='block flex items-center'
      >
        <span aria-hidden="true" className="inline-block mr-1.5">
          <Image src="/icon-media-whatsapp.svg" alt="ws-icon" height={22} width={22} />
        </span>
        +57 318 5241871
      </ExternalLink>
    </nav>
  );
}
