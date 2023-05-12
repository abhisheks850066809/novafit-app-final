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
    title: 'Book Sessions',
    path: '/dashboardtrainee/booksessions',
    icon: icon('ic_user'),
  },
  {
    title: 'My Sessions',
    path: '/dashboardtrainee/sessions',
    icon: icon('ic_user'),
  },
  {
    title: ' Buy Subscription',
    href:'http://localhost:7000/checkout',
    path: '/dashboardtrainee/buysubscription',
    icon: icon('ic_cart'),
  },
 
  {
    title: ' My Subscription',
    path: '/dashboardtrainee/subscription',
    icon: icon('ic_cart'),
  },
  {
    title: 'Attendance',
    path: '/dashboardtrainee/attendance',
    icon: icon('ic_blog'),
  },
  {
    title: 'My Profile',
    path: '/dashboardtrainee/profile',
    icon: icon('ic_user'),
  },
  {
    title: 'Bmi',
    path: '/dashboardtrainee/bmi',
    icon: icon('ic_user'),
  },

  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
