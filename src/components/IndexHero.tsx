'use client';

import { useTranslations } from 'next-intl';
import InternalLink from './Link';
import Figure from './Figure';
import { default as ASSETS } from '../constants';

export default function IndexHero() {
  const t = useTranslations('IndexPage.Hero');

  return (
    <section className="relative max-w-[80%] xl:max-w-[60rem] mx-auto pt-24 lg:pb-36">
      <h1 className="font-bold hero-heading">
        {t.rich('title', {
          highlight: (chunks) => <span className="highlight">{chunks}</span>,
        })}
      </h1>

      <p className="font-light hero-subtitle mt-4 mb-6">{t('subtitle')}</p>

      <InternalLink href="/contact" small>
        {t('contactLink')}
      </InternalLink>

      <Figure
        src={ASSETS.IndexPage.Hero.imageSrc}
        alt="Index Hero Cube Scene"
        className='my-8 lg:absolute -z-10 lg:top-0 lg:-right-24 lg:w-3/6'
      />

      {/* <div className="absolute -z-20 -top-32 -left-24 h-[50rem] w-[15rem] bg-gradient-radial from-zinc-950 via-black to-black blur-3xl"></div> */}
    </section>
  );
}
