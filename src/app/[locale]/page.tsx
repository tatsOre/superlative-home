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
      >
        <div></div>
      </Section>

      <Section
        id='services'
        title={t.rich('ServicesSection.title', {
          highlight: (chunks) => <span className='text-accent'>{chunks}</span>
        })}
        subtitle={t('ServicesSection.subtitle')}
      >
        <div></div>
      </Section>

      <Section
        id='team'
        title={t.rich('TeamSection.title', {
          highlight: (chunks) => <span className='text-accent'>{chunks}</span>
        })}
        subtitle={t('TeamSection.subtitle')}
      >
        <div></div>
      </Section>

      <Section
        title={t.rich('TechEnvSection.title', {
          highlight: (chunks) => <span className='text-accent'>{chunks}</span>
        })}
        subtitle={t('TechEnvSection.subtitle')}
      >
        <div></div>
      </Section>
    </>
  );
}
