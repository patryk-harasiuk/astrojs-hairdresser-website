type ServicePricing = {
  type: string;
  price: string;
};

export type Service = {
  serviceName?: string;
  pricing: ServicePricing[];
  additionalInfo?: string;
};
