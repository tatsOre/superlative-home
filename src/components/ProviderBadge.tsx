'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

type Props = {
  provider: string;
};

export default function ProviderBadge({ provider }: Props) {
  const t = useTranslations('Assets.ProviderBadge');

  const src = provider === "AppStore" ? t('AppStore') : t('GooglePlay');

  return (
    <Image
      src={src}
      alt='provider-badge'
      width="0"
      height="0"
      sizes="100vw"
      className="w-full h-full"
    />
  );
}
