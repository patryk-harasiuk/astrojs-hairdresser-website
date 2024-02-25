import type { Service } from '../types';

type ServiceBoxListItemProps = {
  type: string;
  price: string;
};

const ServiceBoxListItem = ({ type, price }: ServiceBoxListItemProps) => (
  <li className="w-full flex justify-between items-baseline">
    <p className="text-base text-black font-bold">{type}</p>
    <span className="text-sm font-light text-black text-nowrap">{price}</span>
  </li>
);

type ServiceBoxList = {
  pricing: Service['pricing'];
};

export const ServiceBoxList = ({ pricing }: ServiceBoxList) => (
  <ul className="flex flex-col gap-y-5 uppercase">
    {pricing.map(({ type, price }, index) => (
      <ServiceBoxListItem key={index} price={price} type={type} />
    ))}
  </ul>
);
