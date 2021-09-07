import {
  Login, Home, Movie, Profile,
} from '../screens';

const tabNavigations = [
  {
    name: 'Home',
    component: Home.Views,
    options: {
      icon: 'ios-home', size: 25, color: null, headerShown: false,
    },
  },
  {
    name: 'Movie',
    component: Movie.Views,
    options: {
      icon: 'logo-youtube', size: 25, color: null, headerShown: false,
    },
  },
  {
    name: 'Profile',
    component: Profile.Views,
    options: {
      icon: 'ios-person', size: 25, color: null, headerShown: false,
    },
  },
];

const stackNavigations = [
  {
    name: 'Login',
    component: Login.Views,
    options: {
      headerShown: false,
      animationTypeForReplace: 'pop',
    },
    public: true,
  },
];

export { tabNavigations, stackNavigations };
