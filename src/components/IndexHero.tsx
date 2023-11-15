'use client';

import { useTranslations } from 'next-intl';

export default function IndexHero() {
  const t = useTranslations('IndexPage.Hero');

  return (
    <section>
      <div className='container'>
        <h1 className='text-white'>{t('title')}</h1>
      </div>
    </section>
  );
}
