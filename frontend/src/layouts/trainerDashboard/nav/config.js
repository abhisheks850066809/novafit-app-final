// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboardtrainee/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Trainer',
    path: '/dashboardtrainer/sessions',
    icon: icon('ic_user'),
  },
  {
    title: 'subscription',
    path: '/dashboardtrainer/subscription',
    icon: icon('ic_cart'),
  },
  {
    title: 'attendance',
    path: '/dashboardtrainer/attendance',
    icon: icon('ic_blog'),
  },
  {
    title: 'profile',
    path: '/dashboardtrainer/profile',
    icon: icon('ic_user'),
  },
  {
    title: 'bmi',
    path: '/dashboardtrainer/bmi',
    icon: icon('ic_user'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
