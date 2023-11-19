'use client';

import { useTranslations } from 'next-intl';
import ImageMock from './helpers/Image';

export default function ServicesContent() {
  const t = useTranslations('IndexPage.ServicesSection.children');

  const keys = ['design', 'mobile', 'development'] as const;

  return (
    <div className='md:flex md:justify-between'>
      {keys.map((key) => (
        <div key={key} className='md:basis-[28%] xl:basis-[25%] text-center'>
          <ImageMock />
          <p className='text-3xl font-bold mb-5'>
            {t.rich(`${key}.title`, {
              highlight: (chunks) => <span className='text-accent'>{chunks}</span>
            })}
          </p>
          <p className='text-lg font-thin text-balance'>
            {t(`${key}.description`)}
          </p>
        </div>
      ))}
    </div>
  );
}
