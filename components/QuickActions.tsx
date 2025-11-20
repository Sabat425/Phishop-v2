import React from 'react';
import { MapPin, History, BarChart3, Settings, Headphones, Gift, Truck, ShieldCheck } from 'lucide-react';
import { QuickActionItem } from '../types';

const actions: QuickActionItem[] = [
  { id: 'route', label: 'New Route', icon: MapPin },
  { id: 'history', label: 'History', icon: History },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'fleet', label: 'My Fleet', icon: Truck },
  { id: 'rewards', label: 'Rewards', icon: Gift },
  { id: 'support', label: 'Support', icon: Headphones },
  { id: 'safety', label: 'Safety', icon: ShieldCheck },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const QuickActions: React.FC = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-lg font-bold text-brand-brown flex items-center gap-2">
          <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
          Quick Actions
        </h2>
      </div>
      
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {actions.map((action, index) => (
          <button
            key={action.id}
            className="group flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-[1.25rem] shadow-sm border border-transparent hover:border-brand-orange/20 hover:shadow-card transition-all duration-300 hover:-translate-y-1 active:scale-95"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="mb-2 sm:mb-3 p-3.5 rounded-2xl bg-[#FAF7F2] text-brand-brown group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 relative overflow-hidden shadow-inner">
              <action.icon size={22} className="relative z-10 transition-colors duration-300" strokeWidth={2} />
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-brand-muted group-hover:text-brand-brown text-center leading-tight transition-colors">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;