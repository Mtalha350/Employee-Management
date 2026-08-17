import { GridView, PersonAdd } from '@mui/icons-material';
import type { SvgIconComponent } from '@mui/icons-material';

export interface NavigationItem {
  label: string;
  path: string;
  icon: SvgIconComponent;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'Directory',
    path: '/',
    icon: GridView,
  },
  {
    label: 'Add employee',
    path: '/employees/add',
    icon: PersonAdd,
  },
];
