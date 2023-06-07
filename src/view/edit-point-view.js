import { createElement } from '../render.js';
import { humanizeEditDate, toUpperCaseFirstLetter, humanizeTime } from '../utils.js';
import { types, cities } from '../const.js';


const BLANK_EVENT = {
  id: '',
  pointPrice: '',
  dateFrom: '',
  dateTo: '',
  destination: '',
  isFavorite: false,
  offers: [ ],
  type: '',
};

const createEventTypeItems = (currentType) => types.map((type) =>
  `<div class="event__type-item">
<input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${currentType === type ? 'checked' : ''}>
<label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${toUpperCaseFirstLetter(type)}</label>
</div>`
).join('');

const createDestinationOptionTemplate = () => cities.map((city) =>
  `<option value="${city}"></option>`);


function createEditPoint(point, destination, offers) {
  const {pointPrice, dateFrom, dateTo, type} = point;

  const photosList = destination.photos
    .map((photo) => `<img class="event__photo" src="${photo.src}" alt="${photo.description}">`)
    .join('');

  const isChecked = (offer) => point.offers.includes(offer.id) ? 'checked' : '';

  const currentOffers = offers.find((offer) => offer.type === type).offers;

  const typesTemplate = createEventTypeItems(type);


  const offersList = currentOffers.map((offer) =>
    `<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${isChecked(offer)}>
  <label class="event__offer-label" for="event-offer-luggage-1">
    <span class="event__offer-title">${offer.title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${offer.priceOffer}</span>
  </label>
</div>`).join('');

  return (
    `
    <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${typesTemplate}
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${toUpperCaseFirstLetter(type)}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.city}" list="destination-list-1">
        <datalist id="destination-list-1">
          ${createDestinationOptionTemplate()}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizeEditDate(dateFrom)} ${humanizeTime(dateFrom)}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizeEditDate(dateTo)} ${humanizeTime(dateTo)}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;${pointPrice}
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
        ${offersList}
        </div>
      </section>

      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${destination.description}</p>
        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${photosList}
          </div>
      </div>
    </section>
  </section>
</form>
</li>
      </section>
    </section>
  </form>
`);

}

export default class EditPointView {
  constructor({point = BLANK_EVENT, destination, offers}) {
    this.point = point;
    this.destination = destination;
    this.offers = offers;
  }


  getTemplate() {
    return createEditPoint(this.point, this.destination, this.offers);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.elememt = null;
  }
}
