'use client';

import clsx from 'clsx';
import Link from 'next-intl/link';
import { ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
  roundedFull?: boolean;
  small?: boolean;
  className?: string;
};

export default function InternalLink({
  href, className, roundedFull, small, ...rest
}: Props) {
  return (
    <Link
      className={clsx(
        'inline-block w-fit bg-accent hover:bg-white text-black font-bold px-5 py-2 lg:px-8',
        roundedFull ? 'rounded-full' : 'rounded-xl',
        small ? 'text-2xl' : 'text-[32px]',
        className
      )}
      href={href}
      {...rest}
    />
  );
}
