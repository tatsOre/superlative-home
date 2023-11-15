'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function PortfolioPage() {
  const t = useTranslations('PortfolioPage');

  return (
    <section className="max-w-[460px]">
      <h1 className='text-white'>
        {t.rich('title', {
          highlight: (chunks) => (
            <span className="text-accent">{chunks}</span>
          )
        })}
      </h1>
    </section>
  );
}
