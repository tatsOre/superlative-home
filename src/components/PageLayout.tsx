import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

/**
 * PageLayout Component
 * 
 * Returns a generic layout for a page that doesn't have a locale associated with it.
 */

export default function PageLayout({ children, title }: Props) {
  return (
    <div className="container flex grow flex-col py-36">
      <h1 className="text-3xl font-semibold text-white">
        {title}
      </h1>
      <div className="mt-6 text-gray-400">{children}</div>
    </div>
  );
}
