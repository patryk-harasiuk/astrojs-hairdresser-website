import { SERVICES_MOCK } from '../config';
import { ServiceBox } from './ServiceBox';

export const PriceList = () => (
  <section className="container pt-10 flex items-center flex-col w-full gap-y-10 prose lg:prose-xl">
    <h2 className="text-3xl self-start font-bold not-prose">Cennik</h2>
    {/* 
    <div className="flex flex-col gap-y-8 self-start">
      <h3 className="text-xl text-black font-bold uppercase not-prose">Keratynowe prostowanie</h3>

      <div className="flex flex-col gap-y-5 not-prose">
        <ul className="flex flex-col gap-y-5 uppercase">
          <li className="w-full flex justify-between items-center">
            <p className="text-base text-black font-bold">Włosy krótkie</p>
            <span className="text-sm font-light text-black text-nowrap">250</span>
          </li>
          <li className="w-full flex justify-between items-center">
            <p className="text-base text-black font-bold">Włosy średnie</p>
            <span className="text-sm font-light text-black text-nowrap">300</span>
          </li>
          <li className="w-full flex justify-between items-center">
            <p className="text-base text-black font-bold">Włosy długie</p>
            <span className="text-sm font-light text-black text-nowrap">350</span>
          </li>
        </ul>

        <p className="text-black text-base font-light">Gęste włosy + 40 zł</p>
      </div>
    </div> */}

    {SERVICES_MOCK.map(({ serviceName, pricing }, index) => (
      <ServiceBox key={index} pricing={pricing} serviceName={serviceName} />
    ))}
  </section>
);
