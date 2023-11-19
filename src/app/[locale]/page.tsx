'use client';

import ExpertiseContent from 'components/ExpertiseSection';
import IndexHero from 'components/IndexHero';
import Section from 'components/Section';
import ServicesContent from 'components/ServicesSection';
import TechEnvironmentContent from 'components/TechEnvSection';
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
        className='bg-dark-gray'
      >
        <ExpertiseContent />
      </Section>

      <Section
        id='services'
        title={t.rich('ServicesSection.title', {
          highlight: (chunks) => <span className='text-accent'>{chunks}</span>
        })}
        subtitle={t('ServicesSection.subtitle')}
      >
        <ServicesContent />
      </Section>

      <Section
        id='team'
        title={t.rich('TeamSection.title', {
          highlight: (chunks) => <span className='text-accent'>{chunks}</span>
        })}
        subtitle={t('TeamSection.subtitle')}
        className='bg-dark-gray'
      >
        <div></div>
      </Section>

      <Section
        title={t.rich('TechEnvSection.title', {
          highlight: (chunks) => <span className='text-accent'>{chunks}</span>
        })}
        subtitle={t('TechEnvSection.subtitle')}
      >
        <TechEnvironmentContent />
      </Section>
    </>
  );
}
