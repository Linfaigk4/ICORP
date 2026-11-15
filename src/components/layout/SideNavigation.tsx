import React from 'react';
import {
  Rocket,
  HeartPulse,
  Heart,
  Brain,
  Wind,
  Bed,
  AlertTriangle,
  BarChart3,
  ChevronsRight,
} from 'lucide-react';
import { NAVIGATION_ITEMS, type NavItem } from '@/constants/navigation';
import { useMissionStore } from '@/stores/useMissionStore';

const getNavIcon = (id: string) => {
  switch (id) {
    case 'overview':
      return Rocket;
    case 'crew-health':
      return HeartPulse;
    case 'cardiovascular':
      return Heart;
    case 'neurological':
      return Brain;
    case 'respiratory':
      return Wind;
    case 'sleep-fatigue':
      return Bed;
    case 'medical-alerts':
      return AlertTriangle;
    case 'history-reports':
      return BarChart3;
    default:
      return Rocket;
  }
};

export const SideNavigation: React.FC = () => {
  const { activeNavId, setActiveNav } = useMissionStore();
  const center = (NAVIGATION_ITEMS.length - 1) / 2;

  return (
    <aside className="fixed left-0 top-[72px] z-20 h-[calc(100vh-72px)] w-[300px] select-none">
      <div
        className="flex h-full items-center pl-4"
        style={{ perspective: '1000px', perspectiveOrigin: 'left center' }}
      >
        <ul
          className="pointer-events-none flex w-[250px] flex-col gap-1.5 rounded-[28px] border border-[#00CFFF]/25 bg-[#061428]/45 py-2 shadow-[inset_8px_0_24px_rgba(0,207,255,0.12),-6px_0_22px_rgba(0,207,255,0.18)] backdrop-blur-xl"
          style={{
            transform: 'rotateY(15deg)',
            transformOrigin: 'left center',
          }}
        >
          {NAVIGATION_ITEMS.map((item: NavItem, index) => {
            const isActive = activeNavId === item.id;
            const IconComponent = getNavIcon(item.id);
            const offset = index - center;

            return (
              <li
                key={item.id}
                className="pointer-events-none"
                style={{ marginLeft: `${Math.abs(offset) * 6}px` }}
              >
                <button
                  type="button"
                  onClick={() => setActiveNav(item.id)}
                  className={`pointer-events-auto relative z-10 flex w-[230px] items-center justify-between rounded-lg border px-3 py-2.5 text-left text-[13px] font-medium tracking-[0.03em] transition-all duration-200 ${
                    isActive
                      ? 'border-[#00CFFF]/50 border-l-4 border-l-[#00CFFF] bg-gradient-to-r from-[#00CFFF]/20 to-transparent text-white shadow-[inset_14px_0_22px_-8px_rgba(0,207,255,0.55),0_0_18px_rgba(0,207,255,0.18)]'
                      : 'border-[#00CFFF]/15 bg-[#06101f]/55 text-[#8ea4bf] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md hover:border-[#00CFFF]/30 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <IconComponent
                      className={`h-4 w-4 shrink-0 ${
                        isActive
                          ? 'text-[#00CFFF] drop-shadow-[0_0_8px_rgba(0,207,255,0.9)]'
                          : 'text-[#9fb4cc]'
                      }`}
                      strokeWidth={1.75}
                    />
                    <span className="truncate">{item.label}</span>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    {item.alertCount && item.alertCount > 0 ? (
                      <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#ff3b3b] px-1 text-[10px] font-bold text-white shadow-[0_0_10px_rgba(255,59,59,0.85)]">
                        {item.alertCount}
                      </span>
                    ) : null}
                    {isActive ? (
                      <ChevronsRight className="h-4 w-4 text-[#00CFFF] drop-shadow-[0_0_8px_#00CFFF]" />
                    ) : null}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default SideNavigation;
