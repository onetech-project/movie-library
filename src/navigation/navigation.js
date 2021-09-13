import {
  Login, Home, Movie, Profile, Errors,
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
      icon: 'ios-add-circle', size: 25, color: null, headerShown: false,
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
      animationTypeForReplace: 'push',
    },
    public: true,
  },
];

const ErrorScreen = Errors.Views;

export { tabNavigations, stackNavigations, ErrorScreen };
