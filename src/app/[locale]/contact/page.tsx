'use client';

import { useTranslations } from 'next-intl';
import ContactForm from 'components/ContactForm';
import Figure from 'components/Figure';
import Section from 'components/Section';
import { default as ASSETS } from '../../../constants';

export default function ContactPage() {
  const t = useTranslations('ContactPage');

  return (
    <Section>
      <div className='flex flex-col lg:flex-row lg:flex-wrap lg:justify-between'>
        <Figure
          src={ASSETS.ContactPage.imageSrc}
          alt="Animation Scene"
          className='w-full lg:order-first lg:w-5/12'
        />

        <div className='order-first lg:order-2 lg:w-6/12'>
          <ContactForm />
        </div>

        <p className='text-xl lg:text-3xl text-center mx-auto max-w-[570px] mt-20 lg:order-last'>
          {t.rich('tagline', {
            highlight: (chunks) => <b>{chunks}</b>
          })}
        </p>
      </div>
    </Section>
  );
}
