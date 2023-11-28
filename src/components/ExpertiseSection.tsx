'use client';

import { useTranslations } from 'next-intl';
import ImageMock from './helpers/Image';

export default function ExpertiseContent() {
  const t = useTranslations('IndexPage.ExpertiseSection.children');

  const keys = ['commitment', 'maximization', 'alliance'] as const;

  const renderedContent = keys.map((key) => (
    <div key={key} className='md:basis-[28%] xl:basis-[25%] mb-20 md:mb-0'>
      <ImageMock />
      <p className='text-lg font-light text-justify'>
        {t.rich(`${key}.description`, {
          highlight: (chunks) => <span className='font-bold'>{chunks}</span>,
          br: () => <br />
        })}
      </p>
    </div>
  ));

  return (
    <div className='md:flex md:justify-between px-6 sm:px-0'>
      {renderedContent}
    </div>
  );
}
