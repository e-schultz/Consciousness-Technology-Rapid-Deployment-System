import React from 'react';
import { ColorVariant } from './Card';
export interface SectionHeadingProps {
  children: ReactNode;
  color?: ColorVariant;
  className?: string;
}
export const SectionHeading = ({
  children,
  color = 'purple',
  className = ''
}: SectionHeadingProps) => {
  // Map color names to Tailwind classes
  const colorMap: Record<ColorVariant, string> = {
    purple: 'text-purple-400',
    green: 'text-green-400',
    yellow: 'text-yellow-400',
    orange: 'text-orange-400',
    red: 'text-red-400',
    blue: 'text-blue-400'
  };
  const colorClass = colorMap[color];
  return <h3 className={`text-xl font-semibold mb-4 ${colorClass} ${className}`}>
      {children}
    </h3>;
};