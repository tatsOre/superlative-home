'use client';

import Figure from './Figure';

export default function TechEnvironmentContent() {

  const techEnvItems = [
    { src: '/stack/logo-flutter.svg', title: 'flutter', h: 60, w: 145, wi: "w-[105px] lg:w-[125px]" },
    { src: '/stack/logo-ruby.svg', title: 'ruby', h: 56, w: 161, wi: "w-[141px] lg:w-[161px]" },
    { src: '/stack/logo-java.svg', title: 'java', h: 74, w: 125, wi: "w-[105px] lg:w-[125px]" },
    { src: '/stack/logo-react.svg', title: 'react', h: 55, w: 165, wi: "w-[145px] lg:w-[165px]" },
    { src: '/stack/logo-ethereum.svg', title: 'ethereum', h: 60, w: 239, wi: "w-[219px] lg:w-[239px]" },
  ] as const;

  const renderedContent = techEnvItems.map(({ src, title, h, w, wi }) => (
    <Figure key={title} src={src} alt={title} className={wi} />
  ));

  return (
    <div className='lg:w-full flex flex-wrap items-end justify-center gap-x-16 gap-y-8'>
      {renderedContent}
    </div>
  );
}
