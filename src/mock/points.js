import { getRandomArrayElement, getRandomInteger} from '../utils.js';
import {types, pointPrice} from '../const.js';
import { mockDestinations } from './destination.js';


const mockPoints = [
  {
    id: '1',
    pointPrice: getRandomInteger(pointPrice.MIN, pointPrice.MAX),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: getRandomArrayElement(mockDestinations).id,
    isFavorite: false,
    offers: [1,2],
    type: getRandomArrayElement(types),
  },
  {
    id: '2',
    pointPrice: getRandomInteger(pointPrice.MIN, pointPrice.MAX),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: getRandomArrayElement(mockDestinations).id,
    isFavorite: false,
    offers: [3],
    type: getRandomArrayElement(types),
  },
  {
    id: '3',
    pointPrice: getRandomInteger(pointPrice.MIN, pointPrice.MAX),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: getRandomArrayElement(mockDestinations).id,
    isFavorite: false,
    offers: [2,4],
    type: getRandomArrayElement(types),
  },

];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
