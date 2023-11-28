'use client';

import { useTranslations } from 'next-intl';
import InternalLink from './Link';
import Image from 'next/image';

export default function IndexHero() {
  const t = useTranslations('IndexPage.Hero');

  return (
    <section className="relative container pt-12 lg:pt-24 pb-36">
      <h1 className="font-bold hero-heading">
        {t.rich('title', {
          highlight: (chunks) => <span className="highlight">{chunks}</span>,
        })}
      </h1>
      <p className="font-light hero-subtitle mt-4 mb-6">{t('subtitle')}</p>
      <InternalLink href="/contact" small>
        {t('contactLink')}
      </InternalLink>

      <div className='index--hero-figure'>

      </div>

      <div className="absolute -top-12 -right-[10%] -z-10 w-[60%]">
        <Image
          src="/thumbnails/hero-1.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
