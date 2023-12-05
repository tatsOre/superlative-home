'use client';

import { useTranslations } from 'next-intl';
import Figure from './Figure';
import { default as ASSETS } from '../constants';

export default function ExpertiseContent() {
  const t = useTranslations('IndexPage.ExpertiseSection.children');

  const keys = ['commitment', 'maximization', 'alliance'] as const;

  const renderedContent = keys.map((key) => (
    <div key={key} className='w-[80%] md:w-[42%] min-[1200px]:w-[30%] xl:mb-0 xl:w-[25%]'>
      <Figure
        key={key}
        src={ASSETS.ExpertiseSection[key].imageSrc}
        alt={`${key} thumbnail`}
        className='mb-4 lg:my-8'
        width={480}
        height={480}
      />

      <p className='text-lg font-light text-justify'>
        {t.rich(`${key}.description`, {
          highlight: (chunks) => <span className='font-bold'>{chunks}</span>,
          br: () => <br />
        })}
      </p>
    </div>
  ));

  /** ServicesContent and ExpertiseContent share layout CSS rules: */
  return (
    <div className='flex flex-col items-center gap-y-16 md:flex-row md:flex-wrap md:items-stretch md:justify-between md:[&>*:last-child]:mx-auto min-[1200px]:[&>*:last-child]:mx-0'>
      {renderedContent}
    </div>
  );
}
