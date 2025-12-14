import React from 'react';
import { Feature } from '../types';

interface FeatureItemProps {
  feature: Feature;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => {
  const Icon = feature.icon;
  const isPlusMore = feature.text === 'More' || feature.text.startsWith('Everything in');
  
  return (
    <li className="flex items-start gap-3 text-sm text-gray-300">
      <div className={`mt-0.5 shrink-0 ${feature.iconColor || 'text-gray-400'}`}>
        {feature.text === 'More' ? (
           <span className="text-gray-400 text-lg leading-none font-light block -mt-1">+</span>
        ) : feature.text.startsWith('Everything in') ? (
            <span className="text-gray-400 text-lg leading-none font-light block -mt-1">+</span>
        ) : (
             <Icon size={18} strokeWidth={1.5} />
        )}
      </div>
      <div className="flex flex-col">
        <span className="leading-snug">{feature.text}</span>
        {feature.subtext && (
          <span className="text-xs text-gray-500 mt-0.5">{feature.subtext}</span>
        )}
      </div>
    </li>
  );
};

export default FeatureItem;