import React from 'react';
import { 
  User, FileText, Share2, MapPin, MessageCircle, 
  CreditCard, ArrowUpRight, History, Users, Info, Lock,
  ShieldCheck, Headphones, Settings, LogOut, Crown, Wifi,
  ChevronRight, Gem
} from 'lucide-react';
import { Tab } from '../types';

interface AccountViewProps {
  onNavigate: (tab: Tab) => void;
}

const AccountView: React.FC<AccountViewProps> = ({ onNavigate }) => {
  
  const handleToolClick = (label: string) => {
    if (label === 'Share') {
      onNavigate(Tab.INVITE);
    }
  };

  return (
    <div className="pb-32 bg-[#F5F2EB] min-h-screen animate-fade-in relative overflow-hidden">
      
      {/* Custom Styles for Particles */}
      <style>{`
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-120px) translateX(20px); opacity: 0; }
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          animation: float-particle 8s infinite ease-in-out;
          pointer-events: none;
        }
      `}</style>

      {/* 1. Animated Header Section */}
      <div className="relative bg-[#1A120B] pt-12 pb-32 px-6 rounded-b-[3rem] shadow-2xl overflow-hidden">
        
        {/* Particle Effects */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="particle bg-brand-gold"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              bottom: '-20px',
              animationDelay: Math.random() * 5 + 's',
              opacity: Math.random() * 0.3 + 0.1
            }}
          />
        ))}

        {/* Gradient Overlays */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange opacity-10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-gold opacity-10 rounded-full blur-[60px] -translate-x-1/4 translate-y-1/4"></div>

        {/* Profile Info */}
        <div className="flex flex-col items-center relative z-10">
           <div className="relative mb-4 group">
             {/* Animated Ring */}
             <div className="absolute -inset-1 bg-gradient-to-tr from-brand-gold to-brand-orange rounded-full opacity-75 group-hover:opacity-100 blur-[2px] transition-opacity duration-500"></div>
             <div className="w-24 h-24 rounded-full bg-[#2D1B0E] relative flex items-center justify-center border-[3px] border-[#1A120B] shadow-2xl overflow-hidden">
                <User size={40} className="text-[#EBE5DC]" />
             </div>
             <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-gold to-brand-orange text-[#1A120B] text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider shadow-lg">
                Level 5
             </div>
           </div>
           
           <h1 className="text-3xl font-extrabold text-white tracking-tight mb-1">Sado</h1>
           <div className="flex items-center gap-2 opacity-60">
             <span className="text-xs font-mono text-[#EBE5DC] tracking-wider">ID: 12914102</span>
           </div>
        </div>
      </div>

      {/* 2. Premium "Black Card" Balance */}
      <div className="mx-5 -mt-20 relative z-20 perspective-1000">
        <div className="bg-gradient-to-br from-[#2D1B0E] via-[#3E2715] to-[#1A120B] rounded-3xl p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden group">
           
           {/* Card Shine */}
           <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
           <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-gold opacity-10 rounded-full blur-3xl"></div>

           <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-2">
                 <div className="p-2 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                    <Crown size={18} className="text-brand-gold" fill="currentColor" />
                 </div>
                 <span className="text-xs font-bold text-brand-cream tracking-wider uppercase">Premium Member</span>
              </div>
              <Wifi size={20} className="text-white/20 rotate-90" />
           </div>

           <div className="space-y-1 mb-6">
             <p className="text-[10px] font-medium text-white/40 uppercase tracking-[0.2em]">Total Balance</p>
             <h2 className="text-4xl font-mono text-white tracking-tight">
                ₱ 18,934<span className="text-brand-gold/80 text-2xl">.26</span>
             </h2>
           </div>

           <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                 <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-red-500/80"></div>
                    <div className="w-6 h-6 rounded-full bg-yellow-500/80"></div>
                 </div>
                 <span className="text-[10px] font-mono text-white/40">**** 4102</span>
              </div>
              <div className="text-[10px] text-white/60 font-mono">EXP 12/28</div>
           </div>
        </div>
      </div>

      {/* 3. "Control Center" Masonry Grid */}
      <div className="px-5 mt-8 space-y-6">
        
        {/* Row 1: Main Actions (Bento Style) */}
        <div className="grid grid-cols-2 gap-4">
           <button className="bg-white p-4 rounded-[1.5rem] shadow-sm border border-brand-brown/5 hover:border-brand-orange/30 transition-all active:scale-95 flex flex-col justify-between h-32 group relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-orange/10 transition-colors"></div>
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform">
                <CreditCard size={20} />
              </div>
              <div className="text-left relative z-10">
                <h3 className="font-bold text-brand-brown text-sm">Recharge</h3>
                <p className="text-[10px] text-brand-muted leading-tight mt-1">Add funds instantly</p>
              </div>
           </button>

           <button className="bg-white p-4 rounded-[1.5rem] shadow-sm border border-brand-brown/5 hover:border-brand-gold/30 transition-all active:scale-95 flex flex-col justify-between h-32 group relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-gold/10 transition-colors"></div>
              <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                <ArrowUpRight size={20} />
              </div>
              <div className="text-left relative z-10">
                <h3 className="font-bold text-brand-brown text-sm">Withdraw</h3>
                <p className="text-[10px] text-brand-muted leading-tight mt-1">Cash out to bank</p>
              </div>
           </button>
        </div>

        {/* Row 2: Services List */}
        <div>
          <h3 className="text-xs font-bold text-brand-muted uppercase tracking-widest mb-3 ml-1">Essentials</h3>
          <div className="bg-white rounded-[2rem] p-2 shadow-sm border border-brand-brown/5">
            {[
              { icon: History, label: "Transaction History", sub: "View past activity" },
              { icon: Users, label: "My Team", sub: "Manage referrals" },
              { icon: ShieldCheck, label: "Security Center", sub: "Password & PIN" },
            ].map((item, idx) => (
              <button key={idx} className="w-full flex items-center justify-between p-3 hover:bg-[#FAF7F2] rounded-2xl transition-colors group">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-brand-brown flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                      <item.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-sm text-brand-brown">{item.label}</h4>
                      <p className="text-[10px] text-brand-muted">{item.sub}</p>
                    </div>
                 </div>
                 <div className="w-8 h-8 rounded-full border border-brand-brown/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <ChevronRight size={14} className="text-brand-brown" />
                 </div>
              </button>
            ))}
          </div>
        </div>

        {/* Row 3: Tools Grid */}
        <div>
          <h3 className="text-xs font-bold text-brand-muted uppercase tracking-widest mb-3 ml-1">Tools</h3>
          <div className="grid grid-cols-4 gap-3">
             {[
               { icon: Share2, label: "Share" },
               { icon: MapPin, label: "Address" },
               { icon: Headphones, label: "Support" },
               { icon: Settings, label: "Settings" },
             ].map((tool, idx) => (
               <button 
                 key={idx} 
                 onClick={() => handleToolClick(tool.label)}
                 className="flex flex-col items-center gap-2 p-3 bg-white rounded-2xl shadow-sm border border-brand-brown/5 hover:border-brand-orange/20 transition-all active:scale-95"
               >
                  <div className="text-brand-muted hover:text-brand-orange transition-colors">
                    <tool.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-bold text-brand-brown">{tool.label}</span>
               </button>
             ))}
          </div>
        </div>

        <button className="w-full py-4 mt-4 rounded-2xl border border-red-100 text-red-500 bg-red-50/50 font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-50 transition-colors">
           <LogOut size={16} /> Sign Out
        </button>

      </div>
    </div>
  );
};

export default AccountView;