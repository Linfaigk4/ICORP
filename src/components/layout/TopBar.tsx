import React, { useEffect } from 'react';
import { Users, Clock, Satellite } from 'lucide-react';
import { useMissionStore } from '@/stores/useMissionStore';

export const TopBar: React.FC = () => {
  const {
    missionName,
    status,
    crewSize,
    chronoSeconds,
    signalStrength,
    tickChrono,
  } = useMissionStore();

  useEffect(() => {
    const timer = setInterval(() => {
      tickChrono();
    }, 1000);
    return () => clearInterval(timer);
  }, [tickChrono]);

  const formatChrono = (totalSec: number) => {
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `T+ ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <header className="relative z-50 grid h-[72px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 bg-transparent px-5">
      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00CFFF]/30 to-transparent" />

      <div className="flex shrink-0 items-center gap-3 whitespace-nowrap">
        <div className="relative flex h-10 w-10 items-center justify-center">
          <span className="absolute inset-0 rounded-full border border-[#00CFFF]/50 shadow-[0_0_16px_rgba(0,207,255,0.55)]" />
          <svg
            className="h-6 w-6 text-[#00CFFF] drop-shadow-[0_0_8px_rgba(0,207,255,0.9)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="3.2" fill="currentColor" fillOpacity="0.25" />
            <ellipse cx="12" cy="12" rx="9.2" ry="3.6" transform="rotate(-28 12 12)" />
            <ellipse cx="12" cy="12" rx="9.2" ry="3.6" transform="rotate(32 12 12)" opacity="0.55" />
          </svg>
        </div>
        <div className="leading-tight">
          <div className="font-heading text-[18px] font-bold uppercase tracking-[0.18em] text-white">
            SpaceMed
          </div>
          <div className="text-[11px] font-medium tracking-[0.16em] text-[#8eabcc]">
            Mission Health Monitor
          </div>
        </div>
      </div>

      <div className="flex min-w-0 flex-nowrap items-center justify-center gap-2 overflow-hidden">
        <div className="cockpit-pill flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-1.5">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#3DDC84] shadow-[0_0_8px_#3DDC84]" />
          <span className="whitespace-nowrap text-[13px] font-medium text-white">{missionName}</span>
          <span className="mx-0.5 h-3.5 w-px shrink-0 bg-[#00CFFF]/35" />
          <span className="whitespace-nowrap text-[12px] font-semibold text-[#3DDC84]">{status}</span>
        </div>

        <div className="cockpit-pill flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-1.5">
          <Users className="h-3.5 w-3.5 shrink-0 text-[#c5d7ea]" strokeWidth={1.75} />
          <span className="whitespace-nowrap text-[13px] font-medium text-white">Crew: {crewSize}</span>
        </div>

        <div className="cockpit-pill flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-1.5">
          <Clock className="h-3.5 w-3.5 shrink-0 text-[#00CFFF] drop-shadow-[0_0_6px_#00CFFF]" strokeWidth={1.75} />
          <span className="whitespace-nowrap font-mono text-[13px] font-semibold tracking-[0.12em] text-[#00CFFF]">
            {formatChrono(chronoSeconds)}
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3.5 whitespace-nowrap">
        <Satellite
          className="h-4 w-4 text-[#9fd4ee] drop-shadow-[0_0_6px_rgba(0,207,255,0.65)]"
          strokeWidth={1.75}
        />
        <div className="flex items-end gap-[3px]" aria-label="Signal strength">
          {[1, 2, 3, 4].map((bar) => (
            <span
              key={bar}
              className={`w-[3px] rounded-sm ${
                bar <= signalStrength
                  ? 'bg-[#00CFFF] shadow-[0_0_8px_#00CFFF]'
                  : 'bg-[#12324d]'
              }`}
              style={{ height: `${bar * 3 + 4}px` }}
            />
          ))}
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#00CFFF] bg-[#0a2744] shadow-[0_0_16px_rgba(0,207,255,0.75),inset_0_0_10px_rgba(0,207,255,0.35)]">
          <span className="font-heading text-[11px] font-bold tracking-[0.12em] text-white">CS</span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
