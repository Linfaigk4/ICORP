export type MetricStatus = 'normal' | 'stable' | 'warning' | 'critical';

export interface VitalMetric {
  id: string;
  label: string;
  subtitle: string;
  value: string;
  unit: string;
  status: MetricStatus;
  delta: string;
  deltaLabel: string;
  accentColor: 'cyan' | 'cardiac' | 'thermal' | 'nominal';
  normalRange: string;
  missionAverage: string;
  variability: string;
  lastMeasured: string;
  history20h: Array<{ time: string; value: number }>;
}

export const INITIAL_METRICS: VitalMetric[] = [
  {
    id: 'heart-rate',
    label: 'Heart Rate',
    subtitle: 'Cardiovascular Baseline',
    value: '72',
    unit: 'BPM',
    status: 'normal',
    delta: '+2.4%',
    deltaLabel: 'vs last 4h',
    accentColor: 'cardiac',
    normalRange: '60 - 100 BPM',
    missionAverage: '68 BPM',
    variability: '±4.2%',
    lastMeasured: '10s ago',
    history20h: [
      { time: 'T-20h', value: 68 },
      { time: 'T-16h', value: 70 },
      { time: 'T-12h', value: 74 },
      { time: 'T-8h', value: 71 },
      { time: 'T-4h', value: 69 },
      { time: 'Now', value: 72 },
    ],
  },
  {
    id: 'blood-oxygen',
    label: 'Blood Oxygen (SpO2)',
    subtitle: 'Peripheral Saturation',
    value: '98.5',
    unit: '%',
    status: 'stable',
    delta: '+0.1%',
    deltaLabel: 'vs last 4h',
    accentColor: 'cyan',
    normalRange: '95 - 100%',
    missionAverage: '98.2%',
    variability: '±0.4%',
    lastMeasured: '5s ago',
    history20h: [
      { time: 'T-20h', value: 98.2 },
      { time: 'T-16h', value: 98.4 },
      { time: 'T-12h', value: 98.0 },
      { time: 'T-8h', value: 98.6 },
      { time: 'T-4h', value: 98.3 },
      { time: 'Now', value: 98.5 },
    ],
  },
  {
    id: 'core-temp',
    label: 'Core Temperature',
    subtitle: 'Thermoregulation',
    value: '36.8',
    unit: '°C',
    status: 'normal',
    delta: '-0.2°C',
    deltaLabel: 'vs last 4h',
    accentColor: 'thermal',
    normalRange: '36.5 - 37.5°C',
    missionAverage: '36.7°C',
    variability: '±0.2°C',
    lastMeasured: '30s ago',
    history20h: [
      { time: 'T-20h', value: 36.6 },
      { time: 'T-16h', value: 36.7 },
      { time: 'T-12h', value: 36.9 },
      { time: 'T-8h', value: 36.8 },
      { time: 'T-4h', value: 36.7 },
      { time: 'Now', value: 36.8 },
    ],
  },
  {
    id: 'blood-pressure',
    label: 'Blood Pressure',
    subtitle: 'Arterial Pressure',
    value: '118/78',
    unit: 'mmHg',
    status: 'normal',
    delta: 'Optimal',
    deltaLabel: 'systolic/diastolic',
    accentColor: 'nominal',
    normalRange: '90-120 / 60-80',
    missionAverage: '116/76',
    variability: '±3%',
    lastMeasured: '1m ago',
    history20h: [
      { time: 'T-20h', value: 116 },
      { time: 'T-16h', value: 118 },
      { time: 'T-12h', value: 117 },
      { time: 'T-8h', value: 119 },
      { time: 'T-4h', value: 117 },
      { time: 'Now', value: 118 },
    ],
  },
];
