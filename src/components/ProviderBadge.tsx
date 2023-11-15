'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

type Props = {
  provider: string;
};

export default function ProviderBadge({ provider }: Props) {
  const t = useTranslations('Assets.ProviderBadge');

  const src = provider === "AppStore" ? t('AppStore') : t('GooglePlay');

  const width = provider === "AppStore" ? 180 : 200;

  return (
    <Image
      src={src}
      alt='provider-badge'
      height={50}
      width={width}
    />
  );
}
