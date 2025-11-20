import React, { useState, useEffect } from 'react';
import { ArrowLeft, Copy, Share2, CheckCircle2, Gift, Sparkles } from 'lucide-react';

interface InviteViewProps {
  onBack: () => void;
}

const InviteView: React.FC<InviteViewProps> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);
  const inviteCode = "E24DC958";

  // Scroll to top on mount to fix the scroll issue
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#1A120B] animate-fade-in flex flex-col relative overflow-x-hidden font-sans text-white selection:bg-brand-gold/30">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[#2D1B0E] to-transparent opacity-50"></div>
        <div className="absolute top-[-10%] right-[-20%] w-[80vw] h-[80vw] bg-brand-gold/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-brand-orange/5 rounded-full blur-[80px]"></div>
      </div>

      {/* Header */}
      <div className="sticky top-0 z-30 px-6 py-4 flex items-center justify-between backdrop-blur-sm bg-[#1A120B]/50">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors text-white"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-bold tracking-wider uppercase text-brand-gold/80">Referral Program</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      <div className="flex-1 px-6 flex flex-col items-center pt-2 pb-10 relative z-10">
        
        {/* Hero Text */}
        <div className="text-center mb-10 mt-4">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-4 animate-pulse-slow">
              <Sparkles size={12} /> Exclusive Rewards
           </div>
           <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-[#EBE5DC] to-[#9C6D3A] mb-3 tracking-tight">
             Invite & Earn
           </h2>
           <p className="text-white/50 text-sm max-w-[280px] mx-auto leading-relaxed">
             Invite your friends to join the premium network and unlock VIP bonuses together.
           </p>
        </div>

        {/* THE GOLDEN TICKET */}
        <div className="w-full max-w-sm relative group perspective-1000 mb-10">
          <div className="relative bg-gradient-to-br from-[#B6771D] via-[#FFCF71] to-[#7B542F] rounded-3xl p-1 shadow-[0_20px_60px_-15px_rgba(182,119,29,0.3)] transform transition-transform duration-500 hover:rotate-1 hover:scale-[1.02]">
            
            {/* Ticket Cutouts - Notches */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#1A120B] rounded-full z-20 shadow-inner"></div>
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#1A120B] rounded-full z-20 shadow-inner"></div>
            
            <div className="bg-[#1A120B] rounded-[1.25rem] p-6 relative overflow-hidden h-full border border-white/10">
                {/* Inner Texture */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
                
                {/* Holographic Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="flex flex-col items-center justify-center py-6 relative z-10">
                    <span className="text-[10px] font-bold text-[#A69B8F] tracking-[0.3em] uppercase mb-4">Access Code</span>
                    
                    <div className="relative group/code cursor-pointer" onClick={handleCopy}>
                        <div 
                          className="text-4xl font-mono font-black text-white tracking-[0.15em] drop-shadow-lg active:scale-95 transition-transform select-all"
                        >
                          {inviteCode.substring(0, 4)} <span className="text-brand-gold">{inviteCode.substring(4)}</span>
                        </div>
                        {/* Scan line effect */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent -translate-y-full group-hover/code:translate-y-full transition-transform duration-1000"></div>
                    </div>

                    <div className="mt-4 text-[10px] text-brand-gold/60 flex items-center gap-1 font-medium tracking-wide">
                      {copied ? <CheckCircle2 size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      {copied ? "COPIED TO CLIPBOARD" : "TAP TO COPY"}
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full max-w-sm space-y-4 mb-12">
           <button className="w-full py-4 rounded-2xl bg-brand-orange text-white font-bold text-base shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2 group">
              <Share2 size={20} className="group-hover:rotate-12 transition-transform" /> Share Invite Link
           </button>
        </div>

        {/* How It Works - Glass Panel */}
        <div className="w-full max-w-sm bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/5">
           <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
             <Gift size={16} className="text-brand-gold" /> How it works
           </h3>
           
           <div className="relative">
              {/* Horizontal Line connecting steps */}
              <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-gold via-brand-brown to-transparent opacity-30 md:hidden"></div>
              
              {/* Desktop Horizontal Line */}
              <div className="hidden md:block absolute left-0 right-0 top-4 h-0.5 bg-white/10"></div>

              <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
                {[
                  { title: "Share", desc: "Send your ticket." },
                  { title: "Join", desc: "Friend signs up." },
                  { title: "Earn", desc: "Get ₱500 cash." }
                ].map((step, idx) => (
                  <div key={idx} className="flex md:flex-col items-start md:items-center gap-4 md:gap-3 relative z-10 group">
                     <div className="w-8 h-8 rounded-full bg-[#2D1B0E] border border-brand-gold/30 flex items-center justify-center text-xs font-bold text-brand-gold shadow-lg shrink-0 group-hover:scale-110 transition-transform md:bg-[#1A120B]">
                       {idx + 1}
                     </div>
                     <div className="pt-1 md:pt-0 md:text-center">
                       <h4 className="text-sm font-bold text-[#EBE5DC]">{step.title}</h4>
                       <p className="text-xs text-white/40 mt-0.5">{step.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default InviteView;