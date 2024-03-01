import { CONTACT_PHONE_NUMBER, CONTACT_EMAIL } from '../config';

export const Contact = () => (
  <section
    id="kontakt"
    className="container pt-20 pb-14 flex items-center justify-center flex-col w-full gap-y-2 prose lg:prose-xl"
  >
    <h2 className="text-3xl pb-4 not-prose self-start font-bold">Kontakt</h2>

    <p className="not-prose">Telefon: {CONTACT_PHONE_NUMBER}</p>

    <p className="not-prose">Email: {CONTACT_EMAIL}</p>
  </section>
);
