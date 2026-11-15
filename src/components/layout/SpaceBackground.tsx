import React, { useMemo } from 'react';

export const SpaceBackground: React.FC = () => {
  // Deterministic stars
  const stars = useMemo(() => {
    const starList: Array<{ id: number; top: number; left: number; size: number; opacity: number }> = [];
    const count = 120;
    for (let i = 0; i < count; i++) {
      const seed1 = (i * 9301 + 49297) % 233280;
      const seed2 = (seed1 * 9301 + 49297) % 233280;
      const seed3 = (seed2 * 9301 + 49297) % 233280;
      const seed4 = (seed3 * 9301 + 49297) % 233280;

      const top = (seed1 / 233280) * 100;
      const left = (seed2 / 233280) * 100;
      const size = 1 + (seed3 / 233280) * 1.8;
      const opacity = 0.2 + (seed4 / 233280) * 0.7;

      starList.push({ id: i, top, left, size, opacity });
    }
    return starList;
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden bg-transparent">

      {/* Starfield */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: star.size > 2 ? '0 0 6px rgba(0, 207, 255, 0.8)' : undefined,
          }}
        />
      ))}

      {/* Earth limb: dark planet body, soft cyan atmosphere, no hard laser line */}
      <div
        className="pointer-events-none"
        style={{
          position: 'absolute',
          bottom: '-58%',
          left: '-15%',
          width: '130%',
          height: '92%',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(0,207,255,0.28) 0%, rgba(10,48,96,0.45) 14%, rgba(2,10,24,0.15) 36%, transparent 58%)',
          filter: 'blur(18px)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-16 opacity-80"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(0,207,255,0.05) 55%, rgba(0,160,220,0.16) 100%)',
        }}
      />
    </div>
  );
};

export default SpaceBackground;
