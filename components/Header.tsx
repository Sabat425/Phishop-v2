import React from 'react';
import { Bell, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-brand-light/80 backdrop-blur-xl px-6 py-4 transition-all duration-300">
      <div className="flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <button 
            onClick={onMenuClick}
            className="p-2 -ml-2 hover:bg-brand-brown/5 rounded-full transition-colors active:scale-95"
          >
            <Menu size={24} className="text-brand-brown" />
          </button>
          <div className="flex flex-col">
             <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Dashboard</span>
             <h1 className="text-2xl font-extrabold text-dark tracking-tight leading-none">Moaka<span className="text-brand-orange">.</span></h1>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="relative p-2.5 bg-white rounded-full hover:bg-brand-cream/20 transition-all duration-300 group shadow-sm hover:shadow-glow border border-brand-brown/5 active:scale-95">
            <Bell size={20} className="text-brand-brown group-hover:text-brand-gold transition-colors" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
          </button>
          <button className="hidden sm:flex items-center gap-2 p-1.5 pr-3 bg-white rounded-full border border-brand-brown/5 shadow-sm hover:shadow-md transition-all">
             <div className="w-8 h-8 bg-gradient-to-tr from-brand-brown to-brand-gold rounded-full flex items-center justify-center text-white text-xs font-bold">
                JD
             </div>
             <span className="text-sm font-bold text-dark">John Doe</span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;