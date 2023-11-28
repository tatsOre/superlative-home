'use client';

import { useTranslations } from 'next-intl';
import InternalLink from './Link';

export default function IndexHero() {
  const t = useTranslations('IndexPage.Hero');

  return (
    <div className="container pt-12 lg:pt-24 pb-28">
      <h1 className="font-bold hero-heading">
        {t.rich('title', {
          highlight: (chunks) => <span className="highlight">{chunks}</span>,
        })}
      </h1>
      <p className="font-light hero-subtitle mt-4 mb-6">{t('subtitle')}</p>
      <InternalLink href="/contact" small>
        {t('contactLink')}
      </InternalLink>
    </div>
  );
}
