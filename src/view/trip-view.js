import { createElement } from '../render';

function createTripTemplate() {
  return '<div class="page-body__container"></div>';

}

export default class TripTemplateView {
  getTemplate() {
    return createTripTemplate();
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
