'use client';

import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('ContactPage.form');

  const inputClasses = 'text-sm sm:text-base bg-dark-gray py-4 px-5 rounded-lg';

  return (
    <form className='rounded-3xl px-6 py-8 text-center flex flex-wrap gap-3 max-w-[500px] ml-auto contact--form'>
      <h2 className='text-2xl lg:text-4xl font-bold basis-full mb-6'>
        {t('title')}
      </h2>

      <div className='flex flex-col basis-full sm:basis-1/2'>
        <label className='sr-only'>{t('name')}</label>
        <input type='text' placeholder={t('name')} className={`${inputClasses}`} />
        <span className='sr-only'>This field is required</span>
      </div>

      <div className='flex flex-col flex-1'>
        <label className='sr-only'>{t('phone')}</label>
        <input type='text' placeholder={t('phone')} className={`${inputClasses}`} />
      </div>

      <div className='flex flex-col basis-full'>
        <label className='sr-only'>{t('message')}</label>
        <textarea rows={5} placeholder={t('message')} className={`${inputClasses}`} />
        <span className='sr-only'>This field is required</span>
      </div>

      <div className='flex flex-col basis-full'>
        <label className='sr-only'>{t('email')}</label>
        <input type='text' placeholder={t('email')} className={`${inputClasses}`} />
        <span className='sr-only'>This field is required</span>
      </div>

      <button
        className='bg-accent hover:bg-white text-black font-bold px-10 py-2 rounded-xl text-2xl mt-6 mx-auto'
        type='submit'
      >
        {t('submit')}
      </button>
    </form>
  );
}
