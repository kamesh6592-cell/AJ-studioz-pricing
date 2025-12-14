import React, { useState } from 'react';
import { X } from 'lucide-react';
import Toggle from './components/Toggle';
import PricingCard from './components/PricingCard';
import { INDIVIDUAL_PLANS, BUSINESS_PLANS } from './constants';
import { ViewMode } from './types';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('individual');
  const [isYearly, setIsYearly] = useState(false);

  const plans = viewMode === 'individual' ? INDIVIDUAL_PLANS : BUSINESS_PLANS;

  return (
    <div className="min-h-screen w-full bg-[#09090b] text-white relative overflow-x-hidden flex flex-col items-center">
      {/* Close Icon */}
      <div className="absolute top-6 right-6 z-50">
        <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10">
          <X size={24} />
        </button>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 star-bg pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            {viewMode === 'individual' ? 'AJ STUDIOZ' : 'AJ STUDIOZ Business'}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 font-light">
            {viewMode === 'individual' 
              ? 'Introducing Grok 4.1' 
              : 'Ignite collective genius'}
            <span className="block text-gray-500">
              {viewMode === 'individual' 
                ? 'The most powerful AI model' 
                : 'Scale intelligence across your organization'}
            </span>
          </p>

          <Toggle value={viewMode} onChange={setViewMode} />
        </div>

        {/* Cards Grid */}
        <div className={`grid gap-6 w-full animate-fade-in-up ${
            viewMode === 'individual' 
              ? 'grid-cols-1 md:grid-cols-3 max-w-6xl' 
              : 'grid-cols-1 md:grid-cols-2 max-w-4xl'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
          ))}
        </div>

        {/* Footer Toggle (Individual Only) */}
        {viewMode === 'individual' && (
          <div className="mt-16 flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-sm font-medium text-gray-300">Save with yearly billing</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${
                isYearly ? 'bg-white' : 'bg-[#27272a]'
              }`}
            >
              <div
                className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  isYearly ? 'translate-x-5' : 'translate-x-0'
                } ${!isYearly ? 'bg-gray-400' : ''}`}
              />
            </button>
          </div>
        )}
      </main>
      
      {/* Global CSS for Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default App;