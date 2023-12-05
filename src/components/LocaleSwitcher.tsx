'use client';

import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { MouseEvent, useTransition } from 'react';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onClickHandler(event: MouseEvent<HTMLButtonElement>) {
    const nextLocale = locale === 'en' ? 'es' : 'en';
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <button
      disabled={isPending}
      onClick={onClickHandler}
      id="locale-switcher"
      className={clsx(
        "text-neutral-400 flex items-center gap-x-1.5 px-6 py-1 hover:text-neutral-300",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <span>
        <svg
          className="hover:text-neutral-300"
          width="16px"
          height="16px"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="languageIconTitle"
          strokeWidth="1"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title id="languageIconTitle">{t('locale', { locale })}</title>
          <circle cx="12" cy="12" r="10" />
          <path
            strokeLinecap="round"
            d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"
          />
          <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15" />
        </svg>
      </span>

      <span>{t('locale', { locale: locale === 'en' ? 'es' : 'en' })}</span>
    </button>
  );
}
