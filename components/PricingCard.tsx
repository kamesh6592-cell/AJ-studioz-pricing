import React, { useEffect, useState, useRef } from 'react';
import { PricingPlan } from '../types';
import FeatureItem from './FeatureItem';

interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
}

// Utility to parse price string into parts
const parsePrice = (priceStr: string) => {
  // Match groups: 1=prefix, 2=number(with commas/dots), 3=suffix
  const match = priceStr.match(/^([^0-9]*)([0-9,.]+)(.*)$/);
  if (!match) return null;
  
  const prefix = match[1] || '';
  const numberPart = match[2];
  const suffix = match[3] || '';
  
  // Remove commas to get raw number
  const rawValue = parseFloat(numberPart.replace(/,/g, ''));
  
  // Count decimals
  const decimals = numberPart.includes('.') ? numberPart.split('.')[1].length : 0;
  
  return { prefix, rawValue, decimals, suffix };
};

const PriceTicker: React.FC<{ value: string }> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValueRef = useRef(value);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // If "Free" or non-numeric, just set directly and stop
    if (value === 'Free' || value === "Let's Talk") {
      setDisplayValue(value);
      prevValueRef.current = value;
      return;
    }

    const currentParsed = parsePrice(value);
    const prevParsed = parsePrice(prevValueRef.current);

    // If parsing fails (unexpected format), fall back to direct set
    if (!currentParsed || !prevParsed) {
      setDisplayValue(value);
      prevValueRef.current = value;
      return;
    }

    // Don't animate if only prefix/suffix changed but number is same
    if (currentParsed.rawValue === prevParsed.rawValue) {
      setDisplayValue(value);
      return;
    }

    const startValue = prevParsed.rawValue;
    const endValue = currentParsed.rawValue;
    const startTime = performance.now();
    const duration = 500; // ms

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutExpo)
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const current = startValue + (endValue - startValue) * ease;
      
      // Format back to string
      const formattedNumber = current.toLocaleString('en-US', {
        minimumFractionDigits: currentParsed.decimals,
        maximumFractionDigits: currentParsed.decimals,
      });

      setDisplayValue(`${currentParsed.prefix}${formattedNumber}${currentParsed.suffix}`);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        prevValueRef.current = value;
      }
    };

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value]);

  return <span>{displayValue}</span>;
};

const PricingCard: React.FC<PricingCardProps> = ({ plan, isYearly }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  // Determine display values based on toggle state
  const displayPrice = isYearly && plan.yearlyPrice ? plan.yearlyPrice : plan.price;
  const displaySuffix = isYearly && plan.yearlyCurrencySuffix ? plan.yearlyCurrencySuffix : plan.currencySuffix;
  const showSaving = isYearly && plan.yearlySavingText && plan.yearlySavingText.length > 0;

  const handleAction = () => {
    // Only show loading for upgrade buttons (not "Current Plan" or "Contact us")
    if (plan.buttonText === 'Current Plan' || plan.price === "Let's Talk") return;
    
    setIsLoading(true);
    // Simulate loading state for demo purposes
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className={`relative flex flex-col p-6 rounded-3xl bg-[#18181b] border border-white/5 h-full transition-transform hover:scale-[1.01] duration-300 ${plan.isPopular ? 'ring-1 ring-white/10' : ''}`}>
      {plan.isPopular && (
        <span className="absolute top-6 right-6 px-2.5 py-0.5 text-xs font-medium bg-[#27272a] text-gray-300 rounded-full border border-white/10">
          Popular
        </span>
      )}

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-200 mb-2">{plan.title}</h3>
        
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          {/* Price with Counter Animation */}
          {/* Using tabular-nums to prevent jitter during counting */}
          <span className="text-4xl font-bold text-white tracking-tight tabular-nums">
             <PriceTicker value={displayPrice} />
          </span>

          <div className="flex items-baseline gap-1.5">
            {displaySuffix && (
              <span className="text-sm text-gray-500 font-medium">{displaySuffix}</span>
            )}
            
            {showSaving && (
              <span className="text-sm text-orange-500 font-semibold animate-fade-in whitespace-nowrap">
                {plan.yearlySavingText}
              </span>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={handleAction}
        disabled={isLoading}
        className={`w-full py-2.5 px-4 rounded-full text-sm font-semibold transition-all duration-200 mb-8 flex justify-center items-center h-[42px]
          ${isLoading 
            ? 'bg-[#27272a] cursor-not-allowed' 
            : plan.variant === 'white-btn' 
              ? 'bg-white text-black hover:bg-gray-100' 
              : plan.variant === 'outline-btn'
                ? 'bg-[#27272a]/50 text-gray-300 border border-white/10 hover:bg-[#27272a]'
                : 'bg-white text-black'
          }`}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-gray-600 border-t-gray-300 rounded-full animate-spin" />
        ) : (
          plan.buttonText
        )}
      </button>

      <ul className="space-y-4 flex-grow">
        {plan.features.map((feature, idx) => (
          <FeatureItem key={idx} feature={feature} />
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;