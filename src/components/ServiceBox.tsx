import type { Service } from '../types';
import { ServiceBoxList } from './ServiceBoxList';

type Props = Service;

export const ServiceBox = ({ serviceName, pricing }: Props) => (
  <div className="flex flex-col gap-y-8 self-start w-full max-w-[420px]">
    <h3 className="text-xl text-black font-bold uppercase not-prose">{serviceName}</h3>

    <div className="flex flex-col gap-y-5 not-prose">
      <ServiceBoxList pricing={pricing} />

      {/* <p className="text-black text-base font-light">Gęste włosy + 40 zł</p> */}
    </div>
  </div>
);
