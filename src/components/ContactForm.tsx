'use client';

import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('ContactPage.form');

  const inputClasses = 'text-base bg-dark-gray py-4 px-5 rounded-lg';

  return (
    <form className="rounded-3xl px-3 sm:px-6 py-8 text-center flex flex-wrap gap-y-3 contact--form">
      <h2 className="text-2xl lg:text-4xl font-bold basis-full mb-6">
        {t('title')}
      </h2>

      <div className="flex flex-col w-full md:w-[calc(50%-1rem)] md:mr-4">
        <label htmlFor="name" className="sr-only">
          {t('name')}
        </label>
        <input
          type="text"
          id="name"
          placeholder={t('name')}
          className={inputClasses}
        />
        <span className="sr-only">This field is required</span>
      </div>

      <div className="flex flex-col w-full md:w-1/2">
        <label htmlFor="phone" className="sr-only">
          {t('phone')}
        </label>
        <input
          type="text"
          id="phone"
          placeholder={t('phone')}
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="message" className="sr-only">
          {t('message')}
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder={t('message')}
          className={inputClasses}
        />
        <span className="sr-only">This field is required</span>
      </div>

      <div className="flex flex-col basis-full">
        <label htmlFor="email" className="sr-only">
          {t('email')}
        </label>
        <input
          type="text"
          id="email"
          placeholder={t('email')}
          className={inputClasses}
        />
        <span className="sr-only">This field is required</span>
      </div>

      <button
        className="bg-accent hover:bg-white text-black font-bold px-10 py-2 rounded-xl text-2xl mt-6 mx-auto"
        type="submit"
      >
        {t('submit')}
      </button>
    </form>
  );
}
