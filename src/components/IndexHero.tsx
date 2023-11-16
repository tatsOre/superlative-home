'use client';

import { useTranslations } from 'next-intl';

export default function IndexHero() {
  const t = useTranslations('IndexPage.Hero');

  return (
    <div className='max-w-[90%] xl:max-w-[72rem] mx-auto'>
      <h1 className=''>{t('title')}</h1>
    </div>
  );
}
