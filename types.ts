import { LucideIcon } from 'lucide-react';

export interface Feature {
  text: string;
  subtext?: string;
  icon: LucideIcon;
  iconColor?: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  yearlyPrice?: string;
  currencySuffix?: string;
  yearlyCurrencySuffix?: string;
  yearlySavingText?: string;
  buttonText: string;
  isPopular?: boolean;
  isCurrentPlan?: boolean;
  features: Feature[];
  variant: 'default' | 'white-btn' | 'outline-btn';
}

export type ViewMode = 'individual' | 'business';