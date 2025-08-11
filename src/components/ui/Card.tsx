import React from 'react';
export type CardVariant = 'primary' | 'secondary' | 'highlight';
export type ColorVariant = 'purple' | 'green' | 'yellow' | 'orange' | 'red' | 'blue';
export interface CardProps {
  children: ReactNode;
  title?: string;
  titleColor?: ColorVariant;
  variant?: CardVariant;
  className?: string;
}
export const Card = ({
  children,
  title,
  titleColor = 'purple',
  variant = 'primary',
  className = ''
}: CardProps) => {
  // Map color names to Tailwind classes
  const colorMap: Record<ColorVariant, string> = {
    purple: 'text-purple-400',
    green: 'text-green-400',
    yellow: 'text-yellow-400',
    orange: 'text-orange-400',
    red: 'text-red-400',
    blue: 'text-blue-400'
  };
  // Map variants to style classes
  const variantStyles: Record<CardVariant, string> = {
    primary: 'bg-[#111] p-4 rounded-lg border border-[#333]',
    secondary: 'bg-[#0a0a0a] p-4 rounded-lg border border-[#222]',
    highlight: 'bg-[#111] p-4 rounded-lg border-2 border-[#444]'
  };
  const titleColorClass = colorMap[titleColor];
  const cardStyle = variantStyles[variant];
  return <div className={`${cardStyle} ${className}`}>
      {title && <h4 className={`font-semibold text-white mb-2`}>{title}</h4>}
      {children}
    </div>;
};