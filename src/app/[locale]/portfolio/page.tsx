'use client';

import Section from 'components/Section';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function PortfolioPage() {
  const t = useTranslations('PortfolioPage');

  return (
    <Section
      title={t.rich('title', {
        highlight: (chunks) => (
          <span className="text-accent">{chunks}</span>
        )
      })}
      subtitle={t('subtitle')}
    >
    </Section>
  );
}
