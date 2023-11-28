'use client';

import { useTranslations } from 'next-intl';

export default function ExpertiseContent() {
  const t = useTranslations('IndexPage.ExpertiseSection.children');

  const keys = ['commitment', 'maximization', 'alliance'] as const;

  const renderedContent = keys.map((key) => (
    <div key={key} className='mb-20 w-[80%] md:w-[42%] min-[1200px]:w-[30%] xl:mb-0 xl:w-[25%]'>
      {/* Temp Mock Card Image: */}
      <div className='w-full h-72 mb-5' data-thumbnail={key}></div>

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
    <div className='flex flex-col items-center md:flex-row md:flex-wrap md:items-stretch md:justify-between md:[&>*:last-child]:mx-auto min-[1200px]:[&>*:last-child]:mx-0'>
      {renderedContent}
    </div>
  );
}
