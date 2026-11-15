import React from 'react';
import { SpaceBackground } from '@/components/layout/SpaceBackground';
import { TopBar } from '@/components/layout/TopBar';
import { SideNavigation } from '@/components/layout/SideNavigation';

export interface DashboardShellProps {
  children?: React.ReactNode;
}

export const DashboardShell: React.FC<DashboardShellProps> = ({ children }) => {
  return (
    <div className="relative flex h-screen w-screen select-none flex-col overflow-hidden bg-transparent font-heading text-[#f4f8ff]">
      {/* Deep-Space Backdrop */}
      <SpaceBackground />

      {/* Top Navigation & Status Bar (72px) */}
      <TopBar />

      {/* Left Curved Navigation (280px, height: calc(100vh - 72px)) */}
      <SideNavigation />

      {/* Main Content Area: Centered and ready for 3D cylinder */}
      <main className="relative z-10 flex h-full flex-1 items-center justify-center overflow-hidden pl-[280px]">
        {children}
      </main>
    </div>
  );
};

export default DashboardShell;
