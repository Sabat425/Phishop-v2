import React from 'react';
import { Home, FileText, Plus, MessageSquareText, User } from 'lucide-react';
import { Tab } from '../types';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: Tab.HOME, icon: Home, label: 'Home' },
    { id: Tab.ORDERS, icon: FileText, label: 'Orders' },
    { id: Tab.GRAB, icon: Plus, label: 'Grab', highlight: true },
    { id: Tab.CHAT, icon: MessageSquareText, label: 'Chat' },
    { id: Tab.ACCOUNT, icon: User, label: 'Account' },
  ];

  return (
    <div className="fixed bottom-6 left-4 right-4 z-50">
      <div className="bg-[#2D1B0E] text-white shadow-[0_20px_40px_-5px_rgba(45,27,14,0.5)] rounded-[2.5rem] px-6 py-3 max-w-lg mx-auto border border-white/5 backdrop-blur-xl">
        <div className="flex items-center justify-between relative">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            
            if (item.highlight) {
                return (
                    <div key={item.id} className="relative -top-9 group">
                         <button
                            onClick={() => onTabChange(item.id)}
                            className={`
                                w-16 h-16 rounded-full bg-[#FF9D00] text-white 
                                flex items-center justify-center shadow-[0_10px_25px_rgba(255,157,0,0.4)] 
                                border-[6px] border-[#FAF7F2]
                                transform transition-all duration-300
                                hover:scale-110 hover:rotate-90 active:scale-95
                            `}
                        >
                            <item.icon size={30} strokeWidth={3} />
                        </button>
                    </div>
                )
            }

            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`relative flex flex-col items-center justify-center p-1 transition-all duration-300 ${
                  isActive ? 'text-[#FF9D00]' : 'text-[#A69B8F] hover:text-white'
                }`}
              >
                <item.icon 
                  size={24} 
                  strokeWidth={isActive ? 2.5 : 2}
                  className={`transition-all duration-300 ${isActive ? '-translate-y-1' : ''}`}
                />
                
                {/* Active Dot */}
                <div className={`absolute -bottom-1.5 w-1 h-1 bg-[#FF9D00] rounded-full transition-all duration-300 ${
                    isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;