import { GridViewOutlined, PersonAddOutlined } from '@mui/icons-material';

export const navigationItems = [
  {
    label: 'Employee directory',
    path: '/',
    icon: GridViewOutlined,
  },
  {
    label: 'Add employee',
    path: '/employees/add',
    icon: PersonAddOutlined,
  },
];
