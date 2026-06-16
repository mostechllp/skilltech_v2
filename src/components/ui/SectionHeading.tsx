import React from 'react';
import { motion } from 'framer-motion';
interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center';
}
export function SectionHeading({
  children,
  className = '',
  align = 'left'
}: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.5,
        delay: 0.1
      }}
      className={`text-3xl md:text-4xl font-bold text-navy ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      
      {children}
    </motion.h2>);

}