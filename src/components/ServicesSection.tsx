'use client';

import { useTranslations } from 'next-intl';
import InternalLink from './Link';
import Figure from './Figure';
import { default as ASSETS } from '../constants';

export default function ServicesContent() {
  const t = useTranslations('IndexPage.ServicesSection');

  const keys = ['design', 'mobile', 'development'] as const;

  const renderedContent = keys.map((key) => (
    <div key={key} className='w-[80%] md:w-[42%] min-[1200px]:w-[30%] xl:mb-0 xl:w-[25%]'>
      <div className='flex flex-col h-full text-center'>
        <Figure
          key={key}
          src={ASSETS.ServicesSection[key].imageSrc}
          alt={`${key} thumbnail`}
          className='mb-4 lg:my-8'
        />

        <p className='text-3xl font-bold mb-5'>
          {t.rich(`children.${key}.title`, {
            highlight: (chunks) => <span className='text-accent'>{chunks}</span>
          })}
        </p>

        <p className='text-lg font-light flex-1'>
          {t(`children.${key}.description`)}
        </p>

        <InternalLink href='/contact' className='mt-10 mx-auto' small>
          {t('contactLink.label')}
        </InternalLink>
      </div>
    </div>
  ));

  /** ServicesContent and ExpertiseContent share layout CSS rules: */
  return (
    <div className='flex flex-col items-center gap-y-16 md:flex-row md:flex-wrap md:items-stretch md:justify-between md:[&>*:last-child]:mx-auto min-[1200px]:[&>*:last-child]:mx-0'>
      {renderedContent}
    </div>
  );
}
