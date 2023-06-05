import { getRandomPoint } from '../mock/points.js';
import { mockOffers } from '../mock/offers.js';
import { mockDestinations } from '../mock/destination.js';

const POINT_COUNT = 5;

export default class PointsModel {
  points = Array.from({length: POINT_COUNT}, getRandomPoint);

  getPoints() {
    return this.points;
  }

  pointOffers = mockOffers;

  getOffers() {
    return this.pointOffers;
  }

  getPointCurrentOffers(type) {
    return this.pointOffers.find((offer) => offer.type === type).offers;
  }

  pointDestinations = mockDestinations;

  getDestinations() {
    return this.pointDestinations;
  }

  mapIdToOffers(id, type) {
    const offers = this.getPointCurrentOffers(type);
    return id.map((offerId) => offers.find((offer) => offer.id === offerId));
  }
}
