import { ReactNode } from 'react';

type Props = {
  id?: string;
  title: ReactNode | string;
  subtitle?: ReactNode | string;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className=''>
      <div className='max-w-[90%] xl:max-w-[72rem] mx-auto'>
        <h2 className='font-bold text-sec-heading text-balance text-center leading-9 lg:leading-normal'>{title}</h2>
        <h3 className='font-light text-sec-subtitle text-balance text-center'>{subtitle}</h3>
        <div>
          {children}
        </div>
      </div>
    </section>
  );
}
