import { ABOUT_ME } from '../config';

export const AboutMe = () => (
  <section className="container pt-8 flex items-center justify-center flex-col w-full gap-y-2 prose lg:prose-xl">
    <h2 className="text-3xl not-prose self-start font-bold">O mnie</h2>

    <p className="">{ABOUT_ME}</p>
  </section>
);
