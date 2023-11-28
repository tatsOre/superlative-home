import { ReactNode, AnchorHTMLAttributes } from 'react';

type ExternalLinkProps = {
  children: ReactNode | string;
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ExternalLink({ href, children, ...rest }: ExternalLinkProps) {
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
