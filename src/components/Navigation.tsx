'use client';

import { useTranslations } from 'next-intl';
import NavigationLink from './NavigationLink';

type Props = {
  className?: string;
  id?: string;
  onClick(): void;
};

export default function NavigationItems({ className, id, onClick }: Props) {
  const t = useTranslations('Navigation');

  return (
    <div className={className} id={id}>
      <NavigationLink href={t('home.href')} onClick={onClick}>
        {t('home.label')}
      </NavigationLink>
      <NavigationLink href={t('services.href')} onClick={onClick}>
        {t('services.label')}
      </NavigationLink>
      <NavigationLink href={t('portfolio.href')} onClick={onClick}>
        {t('portfolio.label')}
      </NavigationLink>
      {/* <NavigationLink href={t('team.href')} onClick={onClick}>
      {t('team.label')}<
      /NavigationLink> */}
      <NavigationLink href={t('contact.href')} onClick={onClick}>
        {t('contact.label')}
      </NavigationLink>
    </div>
  );
}
