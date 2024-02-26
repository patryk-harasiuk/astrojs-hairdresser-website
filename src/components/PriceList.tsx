import { SERVICES_MOCK } from '../config';
import { ServiceBox } from './ServiceBox';

export const PriceList = () => (
  <section
    id="price-list"
    className="container pt-10 flex items-center flex-col w-full gap-y-16 prose lg:prose-xl"
  >
    <h2 className="text-3xl self-start font-bold not-prose">Cennik</h2>

    {SERVICES_MOCK.map(({ serviceName, pricing }, index) => (
      <ServiceBox key={index} pricing={pricing} serviceName={serviceName} />
    ))}
  </section>
);
