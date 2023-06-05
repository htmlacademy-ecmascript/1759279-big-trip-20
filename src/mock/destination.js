import { getRandomArrayElement } from '../utils.js';
import { descriptions, cities } from '../const.js';

const mockDestinations = [
  {
    id: 1,
    city: getRandomArrayElement(cities),
    description: getRandomArrayElement(descriptions),
    photos: [
      {
        src: 'https://loremflickr.com/248/152?random=1',
        description: 'City 01'
      },
      {
        src: 'https://loremflickr.com/248/152?random=2',
        description: 'City 02'
      },
      {
        src: 'https://loremflickr.com/248/152?random=3',
        description: 'City 03'
      },
    ],
  },

  {
    id: 2,
    city: getRandomArrayElement(cities),
    description: getRandomArrayElement(descriptions),
    photos: [
      {
        src: 'https://loremflickr.com/248/152?random=4',
        description: 'City 04'
      },
      {
        src: 'https://loremflickr.com/248/152?random=5',
        description: 'City 05'
      },
      {
        src: 'https://loremflickr.com/248/152?random=6',
        description: 'City 06'
      },
    ],
  },

  {
    id: 3,
    city: getRandomArrayElement(cities),
    description: getRandomArrayElement(descriptions),
    photos: [
      {
        src: 'https://loremflickr.com/248/152?random=7',
        description: 'City 07'
      },
      {
        src: 'https://loremflickr.com/248/152?random=8',
        description: 'City 08'
      },
      {
        src: 'https://loremflickr.com/248/152?random=9',
        description: 'City 09'
      },
    ],
  },

];


export {mockDestinations};

