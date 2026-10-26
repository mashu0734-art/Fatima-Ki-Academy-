import React from 'react';
import { Info } from 'lucide-react';

interface AdPlaceholderProps {
  slotId?: string;
  format?: 'banner' | 'in-feed' | 'sidebar';
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  slotId = 'slot-default',
  format = 'banner',
  className = ''
}) => {
  return (
    <div
      className={`border border-dashed border-[#D4A52C]/40 bg-[#F5F7FC] rounded-xl p-4 text-center my-6 relative overflow-hidden group ${className}`}
      data-ad-slot={slotId}
      aria-label="Advertisement placeholder"
    >
      <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-[#123B83]/70 mb-1">
        <Info className="w-3.5 h-3.5" />
        <span>Advertisement Placement (AdSense Ready)</span>
      </div>
      <p className="text-xs text-slate-500 max-w-md mx-auto">
        Reserved for future Google AdSense placement ({format} format). Clean, non-intrusive container compliant with Google publisher policies.
      </p>
      <div className="mt-2 inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-400 bg-white border border-slate-200">
        ID: {slotId} · Responsive {format === 'banner' ? '728x90 / 320x100' : '300x250'}
      </div>
    </div>
  );
};
