'use client';

import ProductCard from 'components/ProductCard';
import { useTranslations } from 'next-intl';
import { default as ASSETS } from '../constants';

export default function ProductsContent() {
  const t = useTranslations('PortfolioPage');

  const keys = ['FartMan', 'SpaceInvaders', 'GymTracker', 'Prismay'] as const;

  const CARDS_ASSETS = ASSETS.ProductsSection;

  const renderedCards = keys.map((key) => (
    <ProductCard
      key={key}
      title={t(`children.${key}.title`)}
      description={t(`children.${key}.description`)}
      logoSrc={CARDS_ASSETS[key].logo}
      thumbnailSrc={CARDS_ASSETS[key].thumbnail}
      href='#'
      hrefAppStore='#'
      hrefGooglePlay='#'
    />
  ));

  return (
    <div className='flex flex-col flex-wrap min-[870px]:flex-row justify-between gap-y-16 lg:gap-y-20 pb-8'>
      {renderedCards}
    </div>
  );
}
