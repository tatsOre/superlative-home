'use client';

import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <nav className="flex justify-between p-2 text-white">
      <div>
        <NavigationLink href={t('home.href')}>{t('home.label')}</NavigationLink>
        <NavigationLink href={t('services.href')}>{t('services.label')}</NavigationLink>
        <NavigationLink href={t('portfolio.href')}>{t('portfolio.label')}</NavigationLink>
        <NavigationLink href={t('team.href')}>{t('team.label')}</NavigationLink>
        <NavigationLink href={t('contact.href')}>{t('contact.label')}</NavigationLink>
      </div>
      <LocaleSwitcher />
    </nav>
  );
}
