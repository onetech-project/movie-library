import {
  Login, Home, Movie, Profile,
} from '../screens';

const tabNavigations = [
  {
    name: 'Home',
    component: Home,
    options: {
      icon: 'ios-home', size: 25, color: null, headerShown: false,
    },
  },
  {
    name: 'Movie',
    component: Movie,
    options: {
      icon: 'logo-youtube', size: 25, color: null, headerShown: false,
    },
  },
  {
    name: 'Profile',
    component: Profile,
    options: {
      icon: 'ios-person', size: 25, color: null, headerShown: false,
    },
  },
];

const stackNavigations = [
  {
    name: 'Login',
    component: Login,
    options: {
      headerShown: false,
      animationTypeForReplace: 'pop',
    },
    public: true,
  },
];

export { tabNavigations, stackNavigations };
