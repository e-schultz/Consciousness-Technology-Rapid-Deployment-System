import React from 'react';
import { ColorVariant } from './Card';
export interface SectionProps {
  id: string;
  title: string;
  titleColor?: ColorVariant;
  children: ReactNode;
  className?: string;
}
export const Section = ({
  id,
  title,
  titleColor = 'purple',
  children,
  className = ''
}: SectionProps) => {
  // Map color names to Tailwind classes
  const colorMap: Record<ColorVariant, string> = {
    purple: 'text-purple-400',
    green: 'text-green-400',
    yellow: 'text-yellow-400',
    orange: 'text-orange-400',
    red: 'text-red-400',
    blue: 'text-blue-400'
  };
  const colorClass = colorMap[titleColor];
  return <section id={id} className={`mb-20 scroll-mt-24 ${className}`}>
      <h2 className={`text-3xl font-bold mb-8 ${colorClass}`}>{title}</h2>
      {children}
    </section>;
};