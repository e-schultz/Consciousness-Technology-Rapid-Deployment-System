import React from 'react';
export interface ScaleItem {
  width: string; // Tailwind width class (w-20, w-40, etc.)
  label: string;
  color?: string; // Optional Tailwind color class
  highlight?: boolean; // Whether this item should be highlighted
}
export interface ProgressionScaleProps {
  items: ScaleItem[];
  barHeight?: 1 | 2 | 3 | 4; // Tailwind height classes (h-1, h-2, etc.)
  className?: string;
}
export const ProgressionScale = ({
  items,
  barHeight = 2,
  className = ''
}: ProgressionScaleProps) => {
  // Map height values to Tailwind classes
  const heightClasses = {
    1: 'h-1',
    2: 'h-2',
    3: 'h-3',
    4: 'h-4'
  };
  const heightClass = heightClasses[barHeight];
  return <div className={`flex flex-col space-y-4 ${className}`}>
      {items.map((item, index) => <div key={index} className="flex items-center">
          <div className={`${item.width} ${heightClass} ${item.color || 'bg-gray-400'} rounded-full mr-4`}></div>
          <p className={item.highlight ? 'text-red-400 font-semibold' : ''}>
            {item.label}
          </p>
        </div>)}
    </div>;
};