import type { Service } from '../types';

type Props = Service;

export const ServiceBox = ({ serviceName, pricing }: Props) => {
  return (
    <div className="flex flex-col gap-y-8 self-start">
      <h3 className="text-xl text-black font-bold uppercase not-prose">{serviceName}</h3>

      <div className="flex flex-col gap-y-5 not-prose">
        <ServiceBoxList pricing={pricing} />

        <p className="text-black text-base font-light">Gęste włosy + 40 zł</p>
      </div>

      <p className="text-black text-base font-light">Gęste włosy + 40 zł</p>
    </div>
  );
};

type ServiceBoxListItemProps = {
  type: string;
  price: string;
};

const ServiceBoxListItem = ({ type, price }: ServiceBoxListItemProps) => (
  <li className="w-full flex justify-between items-center">
    <p className="text-base text-black font-bold">{type}</p>
    <span className="text-sm font-light text-black text-nowrap">{price}</span>
  </li>
);

type ServiceBoxList = {
  pricing: Service['pricing'];
};

const ServiceBoxList = ({ pricing }: ServiceBoxList) => (
  <ul className="flex flex-col gap-y-5 uppercase">
    {pricing.map(({ type, price }, index) => (
      <ServiceBoxListItem key={index} price={price} type={type} />
    ))}
  </ul>
);
