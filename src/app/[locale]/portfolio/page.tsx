'use client';

import ProductsContent from 'components/ProductsSection';
import Section from 'components/Section';
import { useTranslations } from 'next-intl';

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
      <ProductsContent />
    </Section>
  );
}
