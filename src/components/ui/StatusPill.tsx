import React from 'react';
import { Check } from 'lucide-react';

export interface StatusPillProps {
  label: string;
  variant?: 'nominal' | 'active' | 'warning';
  showCheck?: boolean;
  showDot?: boolean;
  className?: string;
}

export const StatusPill: React.FC<StatusPillProps> = ({
  label,
  variant = 'nominal',
  showCheck = false,
  showDot = true,
  className = '',
}) => {
  const isNominal = variant === 'nominal' || variant === 'active';
  const textColor = isNominal ? 'text-[#10e87a]' : 'text-[#f59e0b]';
  const bgColor = isNominal ? 'var(--status-nominal-bg)' : 'rgba(56, 38, 8, 0.85)';
  const borderColor = isNominal ? 'rgba(16, 232, 122, 0.4)' : 'rgba(245, 158, 11, 0.4)';
  const dotColor = isNominal ? 'bg-[#10e87a] shadow-[0_0_8px_#10e87a]' : 'bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]';

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border backdrop-blur-sm ${textColor} ${className}`}
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
    >
      {showCheck && <Check className="w-3 h-3 text-[#10e87a] stroke-[2.5]" />}
      {showDot && !showCheck && <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />}
      <span>{label}</span>
    </span>
  );
};

export default StatusPill;
