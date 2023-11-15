'use client';

import { useTranslations } from 'next-intl';

export default function PortfolioPage() {
  const t = useTranslations('PortfolioPage');

  return (
    <section className="max-w-[460px]">
      <h1>
        {t.rich('title', {
          highlight: (chunks) => (
            <span className="text-slate-400">{chunks}</span>
          )
        })}
      </h1>
    </section>
  );
}
