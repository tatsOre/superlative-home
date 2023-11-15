import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({ children, title }: Props) {
  return (
    <div className="relative flex grow flex-col py-36 bg-black">
      <h1 className="text-3xl font-semibold text-white">
        {title}
      </h1>
      <div className="mt-6 text-gray-400">{children}</div>
    </div>
  );
}
