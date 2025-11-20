import { LucideIcon } from 'lucide-react';

export interface Transaction {
  id: string;
  title: string;
  subtitle: string;
  amount: string; // Formatted string like "+₱125"
  type: 'income' | 'expense' | 'pending';
  date: string;
  icon: LucideIcon;
  color: string; // Tailwind color class for icon background
}

export interface QuickActionItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path?: string;
}

export enum Tab {
  HOME = 'Home',
  ORDERS = 'Orders',
  GRAB = 'Grab',
  CHAT = 'Chat',
  ACCOUNT = 'Account',
  INVITE = 'Invite'
}