'use client';

import ContactForm from 'components/ContactForm';
import Section from 'components/Section';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('ContactPage');

  return (
    <Section>
      <div className='lg:max-w-[500px] lg:ml-auto'>
        <ContactForm />
      </div>

      <p className='text-xl lg:text-3xl text-center mx-auto max-w-[570px] mt-20'>
        {t.rich('tagline', {
          highlight: (chunks) => <b>{chunks}</b>
        })}
      </p>
    </Section>
  );
}
