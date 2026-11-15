import React from 'react';

export interface GlassCardProps {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const paddingMap: Record<NonNullable<GlassCardProps['padding']>, string> = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-7',
};

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  active = false,
  className = '',
  padding = 'md',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`glass-effect rounded-3xl relative overflow-hidden transition-all duration-300 ${paddingMap[padding]} ${
        active ? 'glow-cyan border-[rgba(0,207,255,0.85)]' : ''
      } ${className}`}
    >
      {/* Top-edge glass reflection highlight */}
      <div
        className="absolute top-0 inset-x-0 h-[1px] pointer-events-none z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
        }}
      />

      {children}
    </div>
  );
};

export default GlassCard;
