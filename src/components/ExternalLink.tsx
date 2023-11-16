import { ReactNode } from 'react';

type Props = {
  children: ReactNode | string;
  href: string;
  [rest: string]: any;
};

export default function ExternalLink({ href, children, ...rest }: Props) {
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  );
}
