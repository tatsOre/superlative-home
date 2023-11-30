'use client';

import Spline from "@splinetool/react-spline";
import Image from "next/image";

export default function DesignSystemPage() {
  return (
    <div className="">
      {/*       <Spline
        scene="https://prod.spline.design/dGJahwqdExPlOf0h/scene.splinecode"
        className='spline'
      />
      <Spline
        scene="https://prod.spline.design/04P84dPQo04RKYTI/scene.splinecode"
        className='spline'
      />
      <Spline
        scene="https://prod.spline.design/dHFDHDo9vUdlteoI/scene.splinecode"
        className='spline'
      />
      <Spline
        scene="https://prod.spline.design/jVi8qhT7aXEihLzU/scene.splinecode"
        className='spline'
      />

      <Spline
        scene="https://prod.spline.design/Lz-yoT7wGNPMj4Fb/scene.splinecode"
        className='spline'
      />
      <Spline
        scene="https://prod.spline.design/WcHRMB2CdHvIi02V/scene.splinecode"
        className='spline'
      />
      <Spline
        scene="https://prod.spline.design/uhPyTV58NJBY62Z6/scene.splinecode"
        className='spline'
      /> */}

      <div className="w-[300px] h-[300px]">
        <Image
          src='/scenes/contact-1.gif'
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>

      <div className="w-[300px] h-[300px]">
        <Image
          src='/scenes/hero-1.gif'
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>

      <div className="w-[300px] h-[300px]">
        <Image
          src='/scenes/expertise-1.gif'
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>

      <div className="w-[300px] h-[300px]">
        <Image
          src='/scenes/expertise-2.gif'
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>

      <div className="w-[300px] h-[300px]">
        <Image
          src='/scenes/expertise-3.gif'
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>

      <div className="w-[300px] h-[300px]">
        <Image
          src='/scenes/services-1-UX_UI.gif'
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>

      <div className="w-[300px] h-[300px]">
        <Image
          src='/scenes/services-2.gif'
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
