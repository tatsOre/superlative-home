'use client';

import { useTranslations } from 'next-intl';
import NavigationLink from './NavigationLink';

type Props = {
  className?: string;
};

export default function Navigation({ className }: Props) {
  const t = useTranslations('Navigation');

  return (
    <nav className={className}>
        <NavigationLink href={t('home.href')}>{t('home.label')}</NavigationLink>
        <NavigationLink href={t('services.href')}>{t('services.label')}</NavigationLink>
        <NavigationLink href={t('portfolio.href')}>{t('portfolio.label')}</NavigationLink>
        <NavigationLink href={t('team.href')}>{t('team.label')}</NavigationLink>
        <NavigationLink href={t('contact.href')}>{t('contact.label')}</NavigationLink>
    </nav>
  );
}
