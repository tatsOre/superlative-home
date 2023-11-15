'use client';

import { useTranslations } from 'next-intl';
import PageLayout from 'components/PageLayout';

export default function ContactPage() {
  const t = useTranslations('ContactPage');

  return (
    <PageLayout title={t('title')}>
      <div className='text-white'>
        {/** */}
      </div>
    </PageLayout>
  );
}
