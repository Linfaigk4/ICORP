import DashboardShell from '@/components/layout/DashboardShell';

export default function App() {
  return (
    <DashboardShell>
      <div className="relative w-full h-full flex items-center justify-center p-8">
        {/* Holographic 3D Cylinder Stage Target with faint crosshair & dashed circle */}
        <div className="relative w-[480px] h-[480px] flex items-center justify-center">
          {/* Faint rotating dashed circle */}
          <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/25 animate-[spin_60s_linear_infinite]" />

          {/* Faint inner boundary ring */}
          <div className="absolute inset-14 rounded-full border border-cyan-500/15 shadow-[0_0_30px_rgba(0,207,255,0.08)]" />

          {/* Center crosshair */}
          <div className="absolute w-28 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          <div className="absolute h-28 w-[1px] bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />
          <div className="w-2.5 h-2.5 rounded-full border border-[#00CFFF] bg-[#00CFFF]/30 shadow-[0_0_12px_#00CFFF]" />

          {/* Center Stage Ready Text */}
          <div className="absolute bottom-16 text-center">
            <span className="text-[11px] font-mono tracking-widest text-cyan-400/60 uppercase">
              [ 3D CYLINDER STAGE READY ]
            </span>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
