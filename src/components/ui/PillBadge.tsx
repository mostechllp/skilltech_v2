import React from 'react';
import { PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
interface PillBadgeProps {
  text: string;
  className?: string;
}
export function PillBadge({ text, className = '' }: PillBadgeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9
      }}
      whileInView={{
        opacity: 1,
        scale: 1
      }}
      viewport={{
        once: true
      }}
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-accent/30 bg-white shadow-sm ${className}`}>
      
      <PlayCircle className="w-4 h-4 text-pink-accent fill-pink-accent/20" />
      <span className="text-sm font-medium text-slate-700">{text}</span>
    </motion.div>);

}