import React from 'react';

interface ToggleProps {
  value: 'individual' | 'business';
  onChange: (value: 'individual' | 'business') => void;
}

const Toggle: React.FC<ToggleProps> = ({ value, onChange }) => {
  return (
    <div className="relative inline-flex items-center p-1 rounded-full bg-[#18181b] border border-white/10">
      <div
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#27272a] rounded-full transition-all duration-300 ease-in-out ${
          value === 'individual' ? 'left-1' : 'left-[calc(50%+2px)]'
        }`}
      />
      <button
        onClick={() => onChange('individual')}
        className={`relative z-10 px-6 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full ${
          value === 'individual' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
        }`}
      >
        Individual
      </button>
      <button
        onClick={() => onChange('business')}
        className={`relative z-10 px-6 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full ${
          value === 'business' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
        }`}
      >
        Business
      </button>
    </div>
  );
};

export default Toggle;