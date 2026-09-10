import React from 'react';

interface StatusChipProps {
  status: string;
  variant?: 'subtle' | 'outline' | 'pill';
  className?: string;
}

export default function StatusChip({
  status,
  variant = 'outline',
  className = '',
}: StatusChipProps) {
  const getStatusColor = (st: string) => {
    switch (st.toLowerCase()) {
      case 'active':
      case 'producing':
        return 'text-emerald-800 bg-emerald-500/10 border-emerald-600/30';
      case 'developing':
      case 'researching':
        return 'text-amber-800 bg-amber-500/10 border-amber-600/30';
      case 'observing':
        return 'text-indigo-900 bg-indigo-500/10 border-indigo-600/30';
      case 'released':
      case 'completed':
        return 'text-sandstone bg-sandstone/10 border-sandstone/40';
      case 'paused':
        return 'text-neutral-600 bg-neutral-400/10 border-neutral-400/30';
      default:
        return 'text-dark/80 bg-dark/5 border-dark/20';
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] rounded-[2px] border ${getStatusColor(
        status
      )} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 animate-pulse" />
      {status}
    </span>
  );
}
