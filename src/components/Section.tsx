import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  id?: string;
  className?: string;
  title: ReactNode | string;
  subtitle?: ReactNode | string;
  children: ReactNode;
};

export default function Section({
  id, title, subtitle, children, className
}: Props) {
  return (
    <section id={id} className={clsx('py-20', className && className)}>
      <div className='container flex flex-col items-center'>
        <h2 className='font-bold text-sec-heading text-balance leading-9 lg:leading-normal'>
          {title}
        </h2>
        <h3 className='font-light text-sec-subtitle text-balance mb-20'>
          {subtitle}
        </h3>
        {children}
      </div>
    </section>
  );
}
