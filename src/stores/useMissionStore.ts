import { create } from 'zustand';

export interface MissionState {
  missionName: string;
  status: 'Active' | 'Standby';
  crewSize: number;
  chronoSeconds: number;
  orbitLabel: string;
  orbitAltitudeKm: number;
  signalStrength: number;
  activeNavId: string;
  selectedMetricId: string;
  tickChrono: () => void;
  setActiveNav: (id: string) => void;
  setActiveNavId: (id: string) => void;
  setSelectedMetricId: (id: string) => void;
}

export const useMissionStore = create<MissionState>((set) => ({
  missionName: 'Apollo-7 Mission',
  status: 'Active',
  crewSize: 4,
  chronoSeconds: 45296,
  orbitLabel: 'ISS-ORBIT',
  orbitAltitudeKm: 420,
  signalStrength: 4,
  activeNavId: 'crew-health',
  selectedMetricId: 'heart-rate',
  tickChrono: () => set((state) => ({ chronoSeconds: state.chronoSeconds + 1 })),
  setActiveNav: (id) => set({ activeNavId: id }),
  setActiveNavId: (id) => set({ activeNavId: id }),
  setSelectedMetricId: (id) => set({ selectedMetricId: id }),
}));

export default useMissionStore;
