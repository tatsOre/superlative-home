import Figure from "./Figure";
import { default as ASSETS } from '../constants';

export default function ContactSection() {
  return (
    <div>

      <Figure
        src={ASSETS.IndexPage.Hero.imageSrc}
        alt="Index Hero Cube Scene"
        className='my-8 lg:absolute -z-10 lg:top-0 lg:-right-24 lg:w-3/6'
      />

    </div>
  );
}