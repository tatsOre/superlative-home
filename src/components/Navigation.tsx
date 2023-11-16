'use client';

import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <div className='container'>
      <nav className="flex justify-between p-2 text-white">
        <div>
          <NavigationLink href="/">{t('home')}</NavigationLink>
          <NavigationLink href="/#services">{t('services')}</NavigationLink>
          <NavigationLink href="/portfolio">{t('portfolio')}</NavigationLink>
          <NavigationLink href="/#team">{t('team')}</NavigationLink>
          <NavigationLink href="/contact">{t('contact')}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
