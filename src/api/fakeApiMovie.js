import moment from 'moment';
import {
  breakingbad, kingdom, moneyheist, peakyblinders, walkingdead,
} from '../assets/images';

export const getMovie = () => {
  try {
    return Promise.resolve({
      status: 'success',
      data: [
        {
          id: 1,
          title: 'Kingdom',
          thumbnail: kingdom,
          duration: 7200,
          type: 'series',
          genre: ['thriller', 'action', 'drama'],
          synopsis: 'Lorem ipsum dolor sit amet',
          release: moment().format('MMMM YYYY'),
        },
        {
          id: 2,
          title: 'Breaking Bad',
          thumbnail: breakingbad,
          duration: 7200,
          type: 'series',
          genre: ['action', 'drama'],
          synopsis: 'Lorem ipsum dolor sit amet',
          release: moment().format('MMMM YYYY'),
        },
        {
          id: 3,
          title: 'Money Heist',
          thumbnail: moneyheist,
          duration: 7200,
          type: 'series',
          genre: ['action', 'drama'],
          synopsis: 'Lorem ipsum dolor sit amet',
          release: moment().format('MMMM YYYY'),
        },
        {
          id: 4,
          title: 'Peaky Blinders',
          thumbnail: peakyblinders,
          duration: 7200,
          type: 'series',
          genre: ['action', 'drama'],
          synopsis: 'Lorem ipsum dolor sit amet',
          release: moment().format('MMMM YYYY'),
        },
        {
          id: 5,
          title: 'Walking Dead',
          thumbnail: walkingdead,
          duration: 7200,
          type: 'series',
          genre: ['action', 'drama'],
          synopsis: 'Lorem ipsum dolor sit amet',
          release: moment().format('MMMM YYYY'),
        },
      ],
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
