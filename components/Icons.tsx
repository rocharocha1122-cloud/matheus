
import React from 'react';
import { Monitor, Smartphone, Tv, Zap, ShieldCheck, Film, Check, Star, ArrowRight } from 'lucide-react';

const iconsMap: Record<string, any> = {
  Monitor,
  Smartphone,
  Tv,
  Zap,
  ShieldCheck,
  Film,
  Check,
  Star,
  ArrowRight
};

export const Icon = ({ name, className }: { name: string; className?: string }) => {
  const LucideIcon = iconsMap[name];
  return LucideIcon ? <LucideIcon className={className} /> : null;
};
