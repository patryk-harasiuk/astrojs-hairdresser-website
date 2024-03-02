import { ABOUT_ME_1, ABOUT_ME_2, ABOUT_ME_3, INSTAGRAM_ACCOUNT_HREF } from '../config';
import { InstagramSVG } from './InstagramSVG';
import VisuallyHidden from './VisuallyHidden';

export const AboutMe = () => (
  <section
    id="o-mnie"
    className="container pt-14 flex items-center justify-center flex-col w-full gap-y-2 prose lg:prose-xl"
  >
    <h2 className="text-3xl pb-4 not-prose self-start font-bold">O mnie</h2>

    <p>{ABOUT_ME_1}</p>

    <p>{ABOUT_ME_2}</p>

    <div className="flex flex-col items-center mb-0">
      <p>{ABOUT_ME_3}</p>

      <a href={INSTAGRAM_ACCOUNT_HREF} target="_blank" rel="noopener noreferrer">
        <InstagramSVG />
        <VisuallyHidden>Instagram</VisuallyHidden>
      </a>
    </div>
  </section>
);
