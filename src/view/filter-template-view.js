import { createElement } from '../render';

function createFilterTemplate() {
  return '<div class="trip-controls__filters"></div>';

}

export default class TripTemplateView {
  getTemplate() {
    return createFilterTemplate();
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
