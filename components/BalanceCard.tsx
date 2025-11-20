import React, { useState } from 'react';
import { Plus, ArrowUpRight, Users, Eye, EyeOff, Sparkles } from 'lucide-react';

const BalanceCard: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="w-full relative group perspective-1000">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#7B542F] to-[#9C6D3A] text-white shadow-card transition-all duration-500 hover:scale-[1.01] hover:shadow-floating">
        
        {/* Abstract Background Patterns - Cleaner */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#B6771D] opacity-20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#FF9D00] opacity-10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        
        <div className="relative z-10 p-8 flex flex-col items-center text-center space-y-8">
          
          {/* Top Label */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-sm">
            <Sparkles size={12} className="text-[#FFCF71]" />
            <span className="text-[11px] font-bold tracking-widest text-[#FFCF71] uppercase">Premium Member</span>
          </div>

          {/* Balance Section */}
          <div className="space-y-2 w-full">
            <div className="flex items-center justify-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => setShowBalance(!showBalance)}>
              <p className="text-sm font-medium tracking-wide text-[#EBE5DC]">
                Total Balance
              </p>
              {showBalance ? <Eye size={14} /> : <EyeOff size={14} />}
            </div>
            <div className="relative py-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm text-white">
                {showBalance ? (
                  <span className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl sm:text-3xl opacity-70 font-semibold">₱</span>
                    61,616<span className="text-2xl sm:text-3xl text-[#FFCF71]">.60</span>
                  </span>
                ) : (
                  <span className="tracking-widest text-4xl mt-2 block opacity-50">••••••••</span>
                )}
              </h1>
            </div>
          </div>

          {/* Main Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md mx-auto">
            <button className="col-span-1 sm:col-span-2 group/btn relative overflow-hidden w-full bg-[#FF9D00] text-white py-4 rounded-2xl font-bold shadow-[0_4px_20px_rgba(255,157,0,0.3)] hover:shadow-[0_8px_30px_rgba(255,157,0,0.4)] transition-all duration-300 flex items-center justify-center gap-3 active:scale-95">
               <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out"></div>
              <div className="bg-white/20 p-1.5 rounded-full">
                <Plus size={18} strokeWidth={3} />
              </div>
              <span>Top Up Balance</span>
            </button>

            <button className="bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white py-3.5 rounded-2xl font-semibold border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95">
              <ArrowUpRight size={18} strokeWidth={2.5} className="text-[#FFCF71]" />
              <span>Withdraw</span>
            </button>
             <button className="bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white py-3.5 rounded-2xl font-semibold border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95">
              <Users size={18} strokeWidth={2.5} className="text-[#FFCF71]" />
              <span>Invite Friends</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BalanceCard;