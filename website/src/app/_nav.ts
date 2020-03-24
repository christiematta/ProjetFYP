import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Home',
    url: '/home',
    icon: 'icon-home'
  },
  {
    name: 'Projects',
    url: '/projects',
    icon: 'icon-puzzle'
  },
  {
    name: 'Environments',
    url: '/environments',
    icon: 'icon-star'
  },
  {
    divider: true
  },
];
