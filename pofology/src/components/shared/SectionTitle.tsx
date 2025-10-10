import React from 'react';
import DotBg from '@/components/partials/DotBg';

interface SectionTitleProps {
  children: React.ReactNode;
  level?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, level = 2, className = '' }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <div className={`relative ${className}`}>
      <DotBg className="absolute bottom-5 h-8 w-8 fill-current" />
      <Tag className="pl-3 text-4xl font-bold">{children}</Tag>
    </div>
  );
};

export default SectionTitle;
