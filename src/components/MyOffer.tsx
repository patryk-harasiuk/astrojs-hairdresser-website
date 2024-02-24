import { MY_OFFER_1, MY_OFFER_2, MY_OFFER_3 } from '../config';

export const MyOffer = () => (
  <section className="container pt-10 flex items-center flex-col w-full gap-y-2 prose lg:prose-xl">
    <h2 className="text-3xl not-prose self-start font-bold">Moja oferta</h2>

    <p className="">{MY_OFFER_1}</p>

    <p className="">{MY_OFFER_2}</p>

    <p className="">{MY_OFFER_3}</p>
  </section>
);
