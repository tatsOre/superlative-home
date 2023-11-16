'use client';

import IndexHero from 'components/IndexHero';
import Section from 'components/Section';
import { useTranslations } from 'next-intl';

export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
    <>
      <IndexHero />

      <Section
        title={t.rich('ExpertiseSection.title', {
          highlight: (chunks) => <span className='text-accent'>{chunks}</span>
        })}
        subtitle={t('ExpertiseSection.subtitle')}
        children={<div className='h-10 bg-slate-950'></div>}
      />

      <Section
        id='services'
        title={t.rich('ServicesSection.title', {
          highlight: (chunks) => <span className='text-accent'>{chunks}</span>
        })}
        subtitle={t('ServicesSection.subtitle')}
        children={<div className='h-10 bg-slate-950'></div>}
      />

      <Section
        id='team'
        title={t.rich('TeamSection.title', {
          highlight: (chunks) => <span className='text-accent'>{chunks}</span>
        })}
        subtitle={t('TeamSection.subtitle')}
        children={<div className='h-10 bg-slate-950'></div>}
      />

      <Section
        title={t.rich('TechEnvSection.title', {
          highlight: (chunks) => <span className='text-accent'>{chunks}</span>
        })}
        subtitle={t('TechEnvSection.subtitle')}
        children={<div className='h-10 bg-slate-950'></div>}
      />
    </>
  );
}
