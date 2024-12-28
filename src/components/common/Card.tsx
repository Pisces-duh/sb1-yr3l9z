import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
}