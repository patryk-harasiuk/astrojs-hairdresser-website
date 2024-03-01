import { forwardRef } from 'react';
import { MY_OFFER_1, MY_OFFER_2, MY_OFFER_3 } from '../config';

export const MyOffer = forwardRef<HTMLElement | null>((_, ref) => (
  <section
    ref={ref}
    id="moja-oferta"
    className="container pt-10 flex items-center flex-col w-full gap-y-2 prose lg:prose-xl"
  >
    <h2 className="text-3xl pb-4 not-prose self-start font-bold">Moja oferta</h2>

    <p>{MY_OFFER_1}</p>

    <p>{MY_OFFER_2}</p>

    <p>{MY_OFFER_3}</p>
  </section>
));
