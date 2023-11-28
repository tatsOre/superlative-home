'use client';

import { useTranslations } from 'next-intl';
import InternalLink from './Link';

export default function ServicesContent() {
  const t = useTranslations('IndexPage.ServicesSection');

  const keys = ['design', 'mobile', 'development'] as const;

  const renderedContent = keys.map((key) => (
    <div key={key} className='mb-20 w-[80%] md:w-[42%] min-[1200px]:w-[30%] xl:mb-0 xl:w-[25%]'>
      <div className='flex flex-col h-full text-center mb-20 md:mb-0'>
        {/* Temp Mock Card Image: */}
        <div className='w-full h-72 mb-5' data-thumbnail={key}></div>

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
    <div className='flex flex-col items-center md:flex-row md:flex-wrap md:items-stretch md:justify-between md:[&>*:last-child]:mx-auto min-[1200px]:[&>*:last-child]:mx-0'>
      {renderedContent}
    </div>
  );
}
