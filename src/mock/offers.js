import { getRandomArrayElement, getRandomInteger } from '../utils.js';
import { types, pointPrice } from '../const.js';

const mockOffers = [
  {
    type: getRandomArrayElement(types),
    offers: [
      {
        id: 1,
        title: 'title 1',
        priceOffer: getRandomInteger(pointPrice.MIN, pointPrice.MAX),
      },
      {
        id: 2,
        title: 'title 2',
        priceOffer: getRandomInteger(pointPrice.MIN, pointPrice.MAX),
      },
      {
        id: 3,
        title: 'title 3',
        priceOffer: getRandomInteger(pointPrice.MIN, pointPrice.MAX),
      },
      {
        id: 4,
        title: 'title 4',
        priceOffer: getRandomInteger(pointPrice.MIN, pointPrice.MAX),
      },
    ]
  },
  {
    type: getRandomArrayElement(types),
    offers: [
      {
        id: 1,
        title: 'title 1',
        priceOffer: getRandomInteger(pointPrice.MIN, pointPrice.MAX),
      },
      {
        id: 2,
        title: 'title 2',
        priceOffer: getRandomInteger(pointPrice.MIN, pointPrice.MAX),
      },
      {
        id: 3,
        title: 'title 3',
        priceOffer: getRandomInteger(pointPrice.MIN, pointPrice.MAX),
      },
    ]
  },
  {
    type: getRandomArrayElement(types),
    offers: [
      {
        id: 1,
        title: 'title 1',
        priceOffer: getRandomInteger(pointPrice.MIN, pointPrice.MAX),
      },
      {
        id: 2,
        title: 'title 2',
        priceOffer: getRandomInteger(pointPrice.MIN, pointPrice.MAX),
      },
    ]
  },


];


export {mockOffers};
