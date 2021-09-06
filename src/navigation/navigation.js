import Profile from '../screens/Profile/Profile.screen';
import Home from '../screens/Home/Home.screen';
import Movie from '../screens/Movie/Movie.screen';
import { Login } from '../screens';

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
      icon: 'play-outline', size: 25, color: null, headerShown: false,
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
    component: Login.Views,
    options: {
      headerShown: false,
    },
  },
];

export { tabNavigations, stackNavigations };
