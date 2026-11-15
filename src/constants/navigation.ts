export interface NavItem {
  id: string;
  label: string;
  iconName: string;
  alertCount?: number;
}

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Mission Overview', iconName: 'LayoutDashboard' },
  { id: 'crew-health', label: 'Crew Health', iconName: 'Activity' },
  { id: 'cardiovascular', label: 'Cardiovascular', iconName: 'Heart' },
  { id: 'neurological', label: 'Neurological', iconName: 'Brain' },
  { id: 'respiratory', label: 'Respiratory', iconName: 'Wind' },
  { id: 'sleep-fatigue', label: 'Sleep & Fatigue', iconName: 'Moon' },
  { id: 'medical-alerts', label: 'Medical Alerts', iconName: 'AlertTriangle', alertCount: 3 },
  { id: 'history-reports', label: 'History & Reports', iconName: 'FileText' },
];
