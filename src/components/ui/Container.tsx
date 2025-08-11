import React from 'react';
export interface ContainerProps {
  children: ReactNode;
  className?: string;
}
export const Container = ({
  children,
  className = ''
}: ContainerProps) => {
  return <div className={`bg-[#0a0a0a] p-6 rounded-lg border border-[#222] ${className}`}>
      {children}
    </div>;
};