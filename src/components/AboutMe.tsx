import { ABOUT_ME } from '../config';

export const AboutMe = () => (
  <section className="container flex items-center justify-center flex-col w-full gap-y-3 prose lg:prose-xl">
    <h1 className="text-3xl">O mnie</h1>

    <p className="">{ABOUT_ME}</p>
  </section>
);
