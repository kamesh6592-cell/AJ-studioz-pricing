import { 
  CheckCircle2, 
  MessageSquare, 
  Image as ImageIcon, 
  Mic, 
  FolderOpen, 
  Clock, 
  Zap, 
  Brain, 
  Users, 
  HardDrive,
  Share2,
  FileText,
  ShieldCheck,
  BarChart3,
  Globe,
  Lock,
  Infinity as InfinityIcon,
  KeyRound,
  RefreshCcw,
  Settings,
  Database,
  Layout,
  LifeBuoy
} from 'lucide-react';
import { PricingPlan } from './types';

export const INDIVIDUAL_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    title: 'Basic',
    price: 'Free',
    yearlyPrice: 'Free',
    buttonText: 'Current Plan',
    isCurrentPlan: true,
    variant: 'outline-btn',
    features: [
      { text: 'Limited access to chat models', icon: CheckCircle2 },
      { text: 'Limited context memory', icon: CheckCircle2 }, 
      { text: 'Aurora image model', icon: ImageIcon },
      { text: 'Voice access', icon: Mic }, 
      { text: 'Projects', icon: FolderOpen },
      { text: 'Tasks', icon: Clock },
    ]
  },
  {
    id: 'supergrok',
    title: 'AJ STUDIOZ',
    price: '₹700.00',
    currencySuffix: 'INR/month',
    yearlyPrice: '₹6,500.00',
    yearlyCurrencySuffix: 'INR/year',
    yearlySavingText: 'saving 16%',
    buttonText: 'Upgrade to AJ STUDIOZ',
    isPopular: true,
    variant: 'white-btn',
    features: [
      { text: 'Increased access to Grok 4.1', subtext: 'Improved reasoning and search capabilities', icon: CheckCircle2 },
      { text: 'Increased access to Grok 3', icon: CheckCircle2 },
      { text: 'Extended memory', subtext: '128,000 tokens', icon: HardDrive }, 
      { text: 'Priority voice access', icon: Mic },
      { text: 'Imagine image model', icon: ImageIcon },
      { text: 'Companions Ani and Valentine', icon: Users },
      { text: 'Everything in Basic', icon: CheckCircle2, iconColor: 'text-gray-500' }, 
    ]
  },
  {
    id: 'heavy',
    title: 'AJ STUDIOZ Heavy',
    price: '$300.00',
    currencySuffix: 'USD/month',
    yearlyPrice: '$3,000.00',
    yearlyCurrencySuffix: 'USD/year',
    yearlySavingText: 'saving 16%',
    buttonText: 'Upgrade to Heavy',
    variant: 'white-btn',
    features: [
      { text: 'Exclusive preview of Grok 4 Heavy', icon: Zap },
      { text: 'Extended access to Grok 4.1', icon: CheckCircle2 },
      { text: 'Unlimited access to Grok 3', icon: CheckCircle2 },
      { text: 'Longest memory', subtext: '256,000 tokens', icon: HardDrive },
      { text: 'Early access to new features', icon:  Brain }, 
      { text: 'Everything in AJ STUDIOZ', icon: CheckCircle2, iconColor: 'text-gray-500' },
    ]
  }
];

export const BUSINESS_PLANS: PricingPlan[] = [
  {
    id: 'grok-business',
    title: 'AJ STUDIOZ Business',
    price: '$30.00',
    currencySuffix: 'USD/seat',
    yearlyPrice: '$30.00', 
    yearlyCurrencySuffix: 'USD/seat',
    buttonText: 'Create a team',
    variant: 'white-btn',
    features: [
      { text: 'Everything in AJ STUDIOZ', icon: CheckCircle2 }, 
      { text: 'Sharing and collaboration', icon: Share2 },
      { text: 'Centralized billing and invoicing', icon: FileText },
      { text: 'Advanced team + seat management', icon: Users },
      { text: 'User analytics and reporting', icon: BarChart3 },
      { text: 'Domain verification', icon: Globe },
      { text: 'Excluded from training by default', icon: ShieldCheck },
      { text: 'More', icon: CheckCircle2, iconColor: 'text-gray-500' }, 
    ]
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    price: "Let's Talk",
    yearlyPrice: "Let's Talk",
    buttonText: 'Contact us',
    variant: 'white-btn',
    features: [
      { text: 'Unlimited users', icon: InfinityIcon },
      { text: 'Single sign-on (SSO)', icon: KeyRound },
      { text: 'Directory sync (SCIM)', icon: RefreshCcw },
      { text: 'Custom role-based access controls', icon: Lock },
      { text: 'Custom data retention', icon: Database },
      { text: 'Flexible organizational structures', icon: Layout },
      { text: 'Dedicated onboarding and support', icon: LifeBuoy },
      { text: 'More', icon: CheckCircle2, iconColor: 'text-gray-500' },
    ]
  }
];