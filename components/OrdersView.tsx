import React, { useState } from 'react';
import { Search, Package, Clock, CheckCircle2, AlertCircle, Snowflake, ArrowRight, AlertTriangle } from 'lucide-react';

type OrderStatus = 'remaining' | 'pending' | 'completed' | 'freezing';

interface Order {
  id: string;
  productName: string;
  price: string;
  status: OrderStatus;
  paymentStatus: 'Paid' | 'Unpaid';
  date: string;
  image: string;
}

interface OrdersViewProps {
  onNavigateToHome: () => void;
}

const OrdersView: React.FC<OrdersViewProps> = ({ onNavigateToHome }) => {
  const [activeFilter, setActiveFilter] = useState<OrderStatus>('remaining');
  const [showPayModal, setShowPayModal] = useState(false);

  const tabs: { id: OrderStatus; label: string }[] = [
    { id: 'remaining', label: 'Remaining' },
    { id: 'pending', label: 'Pending' },
    { id: 'completed', label: 'Completed' },
    { id: 'freezing', label: 'Freezing' },
  ];

  const mockOrders: Order[] = [
    {
      id: 'ORD-9928',
      productName: 'Home Automation Smart Switch WiFi',
      price: '₱ 298.36',
      status: 'completed',
      paymentStatus: 'Paid',
      date: '2025-11-20 01:49:43',
      image: 'https://images.unsplash.com/photo-1558002038-1091a166111c?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'ORD-9929',
      productName: 'Wireless Noise Cancelling Headphones',
      price: '₱ 1,299.00',
      status: 'remaining',
      paymentStatus: 'Unpaid',
      date: '2025-11-21 10:30:00',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'ORD-9930',
      productName: 'Premium Leather Office Chair',
      price: '₱ 4,500.00',
      status: 'pending',
      paymentStatus: 'Paid',
      date: '2025-11-21 09:15:00',
      image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 'ORD-9931',
      productName: 'Smart Watch Series 7',
      price: '₱ 8,999.00',
      status: 'freezing',
      paymentStatus: 'Paid',
      date: '2025-11-19 14:20:00',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=100&q=80'
    }
  ];

  const filteredOrders = mockOrders.filter(o => o.status === activeFilter);

  const handlePayNow = () => {
    setShowPayModal(true);
  };

  const handleModalOk = () => {
    setShowPayModal(false);
    onNavigateToHome();
  };

  return (
    <div className="pb-32 animate-fade-in relative">
      
      {/* Sticky Search & Filter Header */}
      <div className="sticky top-0 z-20 bg-brand-light/95 backdrop-blur-md px-5 pt-2 pb-4 shadow-sm transition-all duration-300">
        <div className="relative mb-4">
            <input 
                type="text" 
                placeholder="Search order number..." 
                className="w-full bg-white pl-11 pr-4 py-3.5 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-brand-orange/50 text-sm font-medium text-brand-brown placeholder-brand-muted outline-none"
            />
            <Search className="absolute left-4 top-3.5 text-brand-muted" size={18} />
        </div>

        {/* Segmented Control */}
        <div className="flex items-center justify-between bg-[#EBE5DC] p-1 rounded-xl overflow-x-auto hide-scroll">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`
                        flex-1 min-w-[85px] py-2.5 px-2 text-xs font-bold rounded-[10px] transition-all duration-300 capitalize whitespace-nowrap
                        ${activeFilter === tab.id 
                            ? 'bg-white text-brand-brown shadow-sm scale-[1.02]' 
                            : 'text-brand-muted hover:text-brand-brown/70'}
                    `}
                >
                    {tab.label}
                </button>
            ))}
        </div>
      </div>

      {/* Orders List */}
      <div className="px-5 space-y-4 mt-2">
        {filteredOrders.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center opacity-60">
                <Package size={48} className="text-brand-muted mb-4" strokeWidth={1} />
                <p className="text-brand-brown font-semibold">No orders found</p>
            </div>
        ) : (
            filteredOrders.map((order, idx) => (
                <div 
                    key={order.id} 
                    className="bg-white rounded-3xl p-4 shadow-card border border-transparent hover:border-brand-orange/20 transition-all duration-300 group"
                    style={{ animationDelay: `${idx * 100}ms` }}
                >
                    {/* Header: ID and Status */}
                    <div className="flex justify-between items-center mb-3 pb-3 border-b border-brand-light">
                        <span className="text-[10px] font-bold tracking-wider text-brand-muted uppercase">
                            Order #{order.id.split('-')[1]}
                        </span>
                        <span className={`
                            px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide flex items-center gap-1
                            ${order.paymentStatus === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-brand-orange/10 text-brand-orange'}
                        `}>
                             {order.paymentStatus === 'Paid' ? <CheckCircle2 size={10} /> : <AlertCircle size={10} />}
                             {order.paymentStatus}
                        </span>
                    </div>

                    {/* Content */}
                    <div className="flex gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-brand-light shrink-0 overflow-hidden relative">
                            <img src={order.image} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-0.5">
                            <h3 className="font-bold text-brand-brown text-sm leading-snug line-clamp-2">
                                {order.productName}
                            </h3>
                            <div className="flex items-center gap-1 mt-1 text-[11px] text-brand-muted">
                                <Clock size={12} />
                                <span>{order.date}</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer: Price and Action */}
                    <div className="mt-4 flex items-center justify-between bg-brand-light/50 rounded-xl p-3">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-brand-muted font-medium uppercase">Total Amount</span>
                            <span className="text-lg font-extrabold text-brand-brown">{order.price}</span>
                        </div>
                        
                        {activeFilter === 'remaining' && (
                             <button 
                                onClick={handlePayNow}
                                className="bg-brand-orange text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg shadow-brand-orange/20 active:scale-95 transition-transform flex items-center gap-1 hover:bg-amber-500"
                             >
                                Pay Now <ArrowRight size={12} />
                             </button>
                        )}
                         {activeFilter === 'freezing' && (
                             <div className="flex items-center gap-1 text-sky-500 bg-sky-50 px-3 py-1.5 rounded-lg text-xs font-bold">
                                <Snowflake size={12} /> Frozen
                             </div>
                        )}
                         {activeFilter === 'completed' && (
                             <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg text-xs font-bold">
                                <CheckCircle2 size={12} /> Success
                             </div>
                        )}
                    </div>
                </div>
            ))
        )}
      </div>

      {/* Insufficient Balance Modal */}
      {showPayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6 animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-dark/40 backdrop-blur-sm transition-opacity"
            onClick={() => setShowPayModal(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl p-6 w-full max-w-xs shadow-2xl animate-slide-up">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                <AlertTriangle size={24} className="text-red-500" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-brand-brown">Insufficient Balance</h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Your balance is too low to receive this item. Please recharge to continue.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 w-full pt-2">
                <button 
                  onClick={() => setShowPayModal(false)}
                  className="py-3 px-4 rounded-xl font-bold text-brand-muted bg-brand-light hover:bg-gray-200 transition-colors text-sm"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleModalOk}
                  className="py-3 px-4 rounded-xl font-bold text-white bg-brand-orange hover:bg-amber-500 transition-colors shadow-lg shadow-brand-orange/25 text-sm"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default OrdersView;