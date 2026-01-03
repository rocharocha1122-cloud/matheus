
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  savings?: string;
  recommended?: boolean;
  features: string[];
  checkoutUrl: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}
