import React from 'react';
import { X, Home, FileText, Settings, LogOut, HelpCircle, Shield, ChevronRight, Zap } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: FileText, label: 'My Orders' },
    { icon: Zap, label: 'Grab Opportunities' },
    { icon: Shield, label: 'Security Center' },
    { icon: Settings, label: 'Settings' },
    { icon: HelpCircle, label: 'Help & Support' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 left-0 h-full w-[280px] bg-[#FAF7F2] z-50 transform transition-transform duration-300 ease-out shadow-2xl flex flex-col ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-br from-[#7B542F] to-[#5A3D21] text-white relative overflow-hidden">
           {/* Decorative Circles */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
           
           <button onClick={onClose} className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors">
             <X size={20} />
           </button>

           <div className="mt-4 flex items-center gap-3 relative z-10">
             <div className="w-12 h-12 rounded-full bg-[#B6771D] border-2 border-white/20 flex items-center justify-center font-bold text-lg shadow-lg">
                S
             </div>
             <div>
               <h3 className="font-bold text-lg leading-none">Sado</h3>
               <p className="text-white/60 text-xs mt-1">Premium Member</p>
             </div>
           </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {menuItems.map((item, idx) => (
            <button 
              key={idx}
              className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-200 group ${
                item.active ? 'bg-[#FF9D00]/10 text-[#7B542F]' : 'text-[#A69B8F] hover:bg-white hover:text-[#7B542F]'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} strokeWidth={item.active ? 2.5 : 2} className={item.active ? 'text-[#FF9D00]' : 'group-hover:text-[#B6771D]'} />
                <span className="font-bold text-sm">{item.label}</span>
              </div>
              <ChevronRight size={16} className={`text-[#A69B8F]/50 transition-transform ${item.active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'}`} />
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#7B542F]/5">
          <button className="w-full flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors font-bold text-sm">
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>

      </div>
    </>
  );
};

export default Sidebar;