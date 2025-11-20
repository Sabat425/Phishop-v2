
import React, { useState } from 'react';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import QuickActions from './components/QuickActions';
import RecentActivity from './components/RecentActivity';
import BottomNav from './components/BottomNav';
import OrdersView from './components/OrdersView';
import AccountView from './components/AccountView';
import GrabView from './components/GrabView';
import InviteView from './components/InviteView';
import Sidebar from './components/Sidebar';
import { Tab } from './types';
import { HardHat } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.HOME:
        return (
          <main className="flex-1 px-5 pt-4 pb-32 space-y-8 max-w-4xl mx-auto w-full animate-fade-in">
            <BalanceCard />
            <QuickActions />
            <RecentActivity />
          </main>
        );
      case Tab.ORDERS:
        return <OrdersView onNavigateToHome={() => setActiveTab(Tab.HOME)} />;
      case Tab.GRAB:
         return <GrabView />;
      case Tab.CHAT:
        return (
           <div className="flex flex-col items-center justify-center h-[70vh] text-center px-6 animate-fade-in">
              <div className="w-20 h-20 bg-[#EBE5DC] rounded-full flex items-center justify-center mb-6">
                <HardHat size={32} className="text-brand-brown" />
              </div>
              <h2 className="text-xl font-bold text-brand-brown mb-2">Under Construction</h2>
              <p className="text-brand-muted">We are polishing this feature for you.</p>
           </div>
        );
      case Tab.ACCOUNT:
        return <AccountView onNavigate={setActiveTab} />;
      case Tab.INVITE:
        return <InviteView onBack={() => setActiveTab(Tab.ACCOUNT)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-brand-light text-dark font-sans selection:bg-brand-orange/20 flex flex-col">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="mx-auto w-full bg-brand-light min-h-screen relative">
        {/* Header is shown on all tabs except Account, Grab, and Invite for a more immersive feel */}
        {activeTab !== Tab.ACCOUNT && activeTab !== Tab.GRAB && activeTab !== Tab.INVITE && <Header onMenuClick={() => setIsSidebarOpen(true)} />}
        
        {renderContent()}
        
        {/* Hide BottomNav on full-screen pages like Invite */}
        {activeTab !== Tab.INVITE && <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />}
      </div>
    </div>
  );
};

export default App;