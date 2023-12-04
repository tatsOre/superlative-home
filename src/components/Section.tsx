import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  id?: string;
  className?: string;
  title?: ReactNode | string;
  subtitle?: ReactNode | string;
  children: ReactNode;
};

export default function Section({
  id, title, subtitle, children, className
}: Props) {
  return (
    <section id={id} className={clsx('py-20', className)}>
      <div className='container'>
        {title && (
          <h2 className='font-bold sec-heading text-balance leading-9 lg:leading-normal'>
            {title}
          </h2>
        )}
        {subtitle && (
          <h3 className='font-light sec-subtitle text-balance mt-2 mb-10 lg:mb-16'>
            {subtitle}
          </h3>
        )}
        {children}
      </div>
    </section>
  );
}
