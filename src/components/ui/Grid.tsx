import React from 'react';
export interface GridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 2 | 4 | 6 | 8;
  className?: string;
}
export const Grid = ({
  children,
  columns = 1,
  gap = 4,
  className = ''
}: GridProps) => {
  // Create responsive column classes based on the columns prop
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };
  // Create gap classes based on the gap prop
  const gapClasses = {
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8'
  };
  return <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>;
};