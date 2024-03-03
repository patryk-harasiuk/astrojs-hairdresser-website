import { SERVICES_MOCK } from '../config';
import { ServiceBox } from './ServiceBox';

export const PriceList = () => (
  <section
    id="cennik"
    className="container pt-10 flex items-center flex-col w-full gap-y-16 prose lg:prose-xl"
  >
    <h2 className="text-3xl self-start font-bold not-prose">Cennik</h2>

    {SERVICES_MOCK.map(({ serviceName, pricing }, index) => (
      <ServiceBox key={index} pricing={pricing} serviceName={serviceName} />
    ))}

    <div className="prose lg:prose-xl flex flex-col gap-y-2">
      <p className="not-prose">-15% przy pierwszej wizycie</p>
      <p className="not-prose">Konsultacja - darmowa</p>
    </div>
  </section>
);
