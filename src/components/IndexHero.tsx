'use client';

import { useTranslations } from 'next-intl';
import InternalLink from './Link';

export default function IndexHero() {
  const t = useTranslations('IndexPage.Hero');

  return (
    <div className='container pt-20 pb-28'>
      <h1 className='font-bold leading-none hero-heading'>
        {t('title')}
      </h1>
      <p className='font-light hero-subtitle mb-4'>{t('subtitle')}</p>
      <br />

      <InternalLink href='/contact'>¡Vamos a hacerlo!</InternalLink>
    </div>
  );
}
