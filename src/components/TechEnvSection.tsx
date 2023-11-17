'use client';

import Image from 'next/image';

export default function TechEnvironmentContent() {

  const keys = [
    { src: '/stack/logo-flutter.svg', title: 'flutter', h: 60, w: 145 },
    { src: '/stack/logo-ruby.svg', title: 'ruby', h: 56, w: 161 },
    { src: '/stack/logo-java.svg', title: 'java', h: 74, w: 125 },
    { src: '/stack/logo-ethereum.svg', title: 'ethereum', h: 60, w: 239 },
    { src: '/stack/logo-react.svg', title: 'react', h: 55, w: 165 }
  ] as const;

  const renderedContent = keys.map(({ src, title, h, w }) => (
    <div role="img" aria-label={`${title} logo`}>
      <Image src={src} alt={title} height={h} width={w} />
    </div>
  ))

  return (
    <div className='w-[90%] lg:w-full flex flex-wrap gap-x-16 gap-y-8 items-end justify-center'>
      {renderedContent}
    </div>
  );
}
