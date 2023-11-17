'use client';

import { useTranslations } from 'next-intl';

export default function IndexHero() {
  const t = useTranslations('IndexPage.Hero');

  return (
    <div className='container'>
      <h1 className=''>{t('title')}</h1>
    </div>
  );
}
