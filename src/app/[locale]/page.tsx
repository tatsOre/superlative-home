'use client';

import IndexHero from 'components/IndexHero';
import { useTranslations } from 'next-intl';

export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
    <IndexHero />
  );
}
