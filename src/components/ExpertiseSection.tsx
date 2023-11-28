'use client';

import { useTranslations } from 'next-intl';
import ImageMock from './helpers/Image';

export default function ExpertiseContent() {
  const t = useTranslations('IndexPage.ExpertiseSection.children');

  const keys = ['commitment', 'maximization', 'alliance'] as const;

  const renderedContent = keys.map((key) => (
    <div key={key} className='mb-20 md:w-[42%] min-[1200px]:w-[30%] xl:mb-0 xl:w-[28%]'>
      <ImageMock />
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
    <div className='md:flex md:flex-wrap md:justify-between md:[&>*:last-child]:mx-auto min-[1200px]:[&>*:last-child]:mx-0'>
      {renderedContent}
    </div>
  );
}
