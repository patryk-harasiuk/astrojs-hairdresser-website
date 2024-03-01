import { ABOUT_ME_1, ABOUT_ME_2, ABOUT_ME_3 } from '../config';

export const AboutMe = () => (
  <section
    id="o-mnie"
    className="container pt-14 flex items-center justify-center flex-col w-full gap-y-2 prose lg:prose-xl"
  >
    <h2 className="text-3xl pb-4 not-prose self-start font-bold">O mnie</h2>

    <p>{ABOUT_ME_1}</p>

    <p>{ABOUT_ME_2}</p>

    <p>{ABOUT_ME_3}</p>
  </section>
);
