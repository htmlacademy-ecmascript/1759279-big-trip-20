import { createElement } from '../render';

function createListPoint() {
  return '<ul class="trip-events__list"></ul>';
}

export default class ListPointView {
  getTemplate() {
    return createListPoint();
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
