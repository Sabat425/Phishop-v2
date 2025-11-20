import React from 'react';
import { CheckCircle2, ArrowDownLeft, ShoppingBag, ArrowRight, Clock } from 'lucide-react';
import { Transaction } from '../types';

const transactions: Transaction[] = [
  {
    id: '1',
    title: 'Delivery Completed',
    subtitle: 'Order #1247 • 25 mins ago',
    amount: '+₱125.00',
    type: 'income',
    date: 'Today',
    icon: CheckCircle2,
    color: 'text-brand-gold bg-[#FFF8ED]', // Customized to match theme
  },
  {
    id: '2',
    title: 'Wallet Recharge',
    subtitle: 'via GCash • 2 hours ago',
    amount: '+₱5,000.00',
    type: 'income',
    date: 'Today',
    icon: ArrowDownLeft,
    color: 'text-brand-orange bg-[#FFF8ED]',
  },
  {
    id: '3',
    title: 'New Order Assigned',
    subtitle: 'Order #1248 • 5 hours ago',
    amount: 'Pending',
    type: 'pending',
    date: 'Today',
    icon: ShoppingBag,
    color: 'text-[#7B542F] bg-[#EBE5DC]',
  },
   {
    id: '4',
    title: 'Weekly Subscription',
    subtitle: 'Plan Renewed • Yesterday',
    amount: '-₱250.00',
    type: 'expense',
    date: 'Yesterday',
    icon: Clock,
    color: 'text-red-500 bg-red-50',
  },
];

const RecentActivity: React.FC = () => {
  return (
    <div className="space-y-5 mb-28">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-lg font-bold text-brand-brown flex items-center gap-2">
           <span className="w-1.5 h-6 bg-brand-orange rounded-full"></span>
           Recent Activity
        </h2>
        <button className="text-xs font-bold text-brand-brown/70 hover:text-brand-orange flex items-center gap-1 transition-colors bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
          View All <ArrowRight size={14} />
        </button>
      </div>

      <div className="space-y-3">
        {transactions.map((tx, index) => (
          <div 
            key={tx.id}
            className="flex items-center justify-between p-4 bg-white rounded-3xl shadow-sm border border-transparent hover:border-brand-gold/10 hover:shadow-card transition-all duration-300 group cursor-pointer"
             style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-4">
              <div className={`p-3.5 rounded-2xl ${tx.color} group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                <tx.icon size={22} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-bold text-brand-brown text-[15px]">{tx.title}</span>
                <span className="text-xs text-brand-muted font-medium">{tx.subtitle}</span>
              </div>
            </div>
            <div className={`text-right font-bold ${
              tx.type === 'income' ? 'text-emerald-600' : 
              tx.type === 'expense' ? 'text-red-500' : 'text-brand-orange'
            }`}>
              <span className="block text-base">{tx.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;