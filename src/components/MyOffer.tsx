import { MY_OFFER_1, MY_OFFER_2, MY_OFFER_3 } from '../config';

export const MyOffer = () => (
  <section className="container flex items-center flex-col w-full gap-y-3 prose lg:prose-xl">
    <h1 className="text-3xl">Moja oferta</h1>

    <p className="">{MY_OFFER_1}</p>

    <p className="">{MY_OFFER_2}</p>

    <p className="">{MY_OFFER_3}</p>
  </section>
);
