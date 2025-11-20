
import React, { useState, useEffect } from 'react';
import { Zap, Shield, Activity, Lock, RefreshCw, Award, ChevronRight } from 'lucide-react';

const GrabView: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  const handleGrab = () => {
    if (isScanning) return;
    setIsScanning(true);
    setScanProgress(0);
  };

  // Simulate Scanning Progress
  useEffect(() => {
    let interval: any;
    if (isScanning) {
      interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            setIsScanning(false);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isScanning]);

  return (
    <div className="pb-32 min-h-screen bg-[#F5F2EB] animate-fade-in relative overflow-x-hidden">
      <style>{`
        @keyframes radar-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .radar-sweep {
          background: conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(255, 157, 0, 0.4) 360deg);
          animation: radar-spin 2s linear infinite;
          border-radius: 50%;
        }
        .pulse-effect {
          animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
      `}</style>

      {/* 1. Hero Section / Balance HUD */}
      <div className="relative bg-[#1A120B] pt-8 pb-10 px-6 rounded-b-[3rem] shadow-2xl border-b-4 border-brand-gold/20">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-brand-gold font-bold text-[10px] tracking-[0.2em] uppercase mb-1 flex items-center gap-2">
              <Shield size={12} /> Secure Channel Encrypted
            </h2>
            <h1 className="text-3xl font-bold text-white tracking-tight">Grab Console</h1>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold text-white/80">SYSTEM ONLINE</span>
          </div>
        </div>

        {/* Balance Display */}
        <div className="flex flex-col items-center justify-center relative z-10">
          <span className="text-[#A69B8F] text-xs font-medium uppercase tracking-widest mb-2">Available Assets</span>
          <div className="text-5xl font-black text-white tracking-tighter flex items-baseline gap-1">
            <span className="text-2xl text-brand-gold opacity-80">₱</span>
            18,934<span className="text-3xl text-white/40">.26</span>
          </div>
        </div>

        {/* Live Ticker */}
        <div className="mt-8 bg-white/5 rounded-xl p-2 border border-white/5 overflow-hidden">
          <div className="flex items-center gap-4 text-[10px] text-white/60 font-mono whitespace-nowrap animate-slide-up">
            <span className="flex items-center gap-1"><Activity size={10} className="text-emerald-400" /> USER_992 EARNED ₱450.00</span>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span className="flex items-center gap-1"><Activity size={10} className="text-emerald-400" /> USER_881 EARNED ₱120.50</span>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span className="flex items-center gap-1"><Activity size={10} className="text-emerald-400" /> USER_104 MATCHED #9921</span>
          </div>
        </div>
      </div>

      {/* 2. Stats Grid (Floating) */}
      <div className="mx-5 -mt-6 relative z-20 grid grid-cols-2 gap-3">
        <div className="bg-white p-4 rounded-2xl shadow-card border-b-2 border-brand-gold/20 flex flex-col items-center justify-center gap-1">
          <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">Today's Profit</span>
          <span className="text-xl font-black text-brand-brown">+₱ 842.50</span>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-card border-b-2 border-brand-brown/10 flex flex-col items-center justify-center gap-1">
          <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">Total Profit</span>
          <span className="text-xl font-black text-brand-brown">₱ 12,450.00</span>
        </div>
      </div>

      {/* 3. Main Scanner / Grab Button */}
      <div className="flex flex-col items-center justify-center py-12 relative">
        
        {/* Background Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
           <div className="w-64 h-64 border border-brand-brown/30 rounded-full"></div>
           <div className="absolute w-48 h-48 border border-brand-brown/30 rounded-full"></div>
           <div className="absolute w-80 h-80 border-dashed border-brand-brown/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
        </div>

        {/* Interactive Scanner */}
        <div className="relative w-48 h-48">
           {/* Pulse Effect when Idle */}
           {!isScanning && (
              <>
                <div className="absolute inset-0 bg-brand-orange/20 rounded-full pulse-effect"></div>
                <div className="absolute inset-4 bg-brand-orange/10 rounded-full pulse-effect" style={{ animationDelay: '0.5s' }}></div>
              </>
           )}

           {/* Spinning Radar when Active */}
           {isScanning && (
             <div className="absolute inset-[-10px] radar-sweep z-0 opacity-50"></div>
           )}

           {/* Main Button */}
           <button 
             onClick={handleGrab}
             disabled={isScanning}
             className={`
               absolute inset-2 rounded-full shadow-[0_10px_40px_rgba(255,157,0,0.4)] border-[6px] border-[#F5F2EB]
               flex flex-col items-center justify-center z-10 transition-all duration-300 active:scale-95
               ${isScanning ? 'bg-[#2D1B0E]' : 'bg-gradient-to-br from-brand-orange to-[#CC7E00] hover:scale-105'}
             `}
           >
             {isScanning ? (
               <>
                 <span className="text-3xl font-black text-white tabular-nums">{scanProgress}%</span>
                 <span className="text-[10px] font-bold text-brand-gold/80 animate-pulse mt-1">MATCHING...</span>
               </>
             ) : (
               <>
                 <Zap size={40} className="text-white mb-1" fill="currentColor" />
                 <span className="text-lg font-black text-white uppercase tracking-wider">Start</span>
                 <span className="text-[10px] font-bold text-white/60">GRAB ORDER</span>
               </>
             )}
           </button>
        </div>
        
        <p className="mt-8 text-xs font-medium text-brand-muted bg-white/60 px-4 py-2 rounded-full border border-brand-brown/5">
           {isScanning ? 'Scanning network for optimal routes...' : 'Tap to scan for nearby orders'}
        </p>
      </div>

      {/* 4. Mission Control / Bottom Stats */}
      <div className="px-5 pb-6">
        <div className="bg-white rounded-[2rem] p-5 shadow-sm border border-brand-brown/5 relative overflow-hidden">
           {/* Progress Bar Decoration */}
           <div className="absolute top-0 left-0 w-full h-1 bg-brand-light">
             <div className="h-full bg-brand-gold w-[35%] rounded-r-full"></div>
           </div>

           <div className="flex items-center justify-between mb-6 mt-2">
              <div>
                <h3 className="font-bold text-brand-brown text-lg">VIP Level 1</h3>
                <div className="flex items-center gap-2 text-xs text-brand-muted">
                   <Award size={14} className="text-brand-gold" />
                   <span>Commission Rate: <b className="text-brand-gold">2.50%</b></span>
                </div>
              </div>
              <button className="bg-[#1A120B] text-brand-gold px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1 hover:bg-brand-brown transition-colors">
                 Upgrade <ChevronRight size={12} />
              </button>
           </div>

           <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FAF7F2] p-3 rounded-2xl flex flex-col items-center text-center">
                 <span className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-2">
                    <RefreshCw size={16} />
                 </span>
                 <span className="text-2xl font-bold text-brand-brown">12</span>
                 <span className="text-[10px] font-bold text-brand-muted uppercase">Completed</span>
              </div>
              <div className="bg-[#FAF7F2] p-3 rounded-2xl flex flex-col items-center text-center">
                 <span className="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mb-2">
                    <Lock size={16} />
                 </span>
                 <span className="text-2xl font-bold text-brand-brown">38</span>
                 <span className="text-[10px] font-bold text-brand-muted uppercase">Remaining</span>
              </div>
           </div>
        </div>
      </div>

    </div>
  );
};

export default GrabView;
