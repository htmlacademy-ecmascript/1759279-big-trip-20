import FilterView from '../view/filter-view.js';
import FilterTemplateView from '../view/filter-template-view.js';
import {render} from '../render.js';


export default class FilterPresenter {
  filterComponent = new FilterTemplateView();


  constructor ({filterContainer}) {
    this.filterContainer = filterContainer;
  }


  init() {
    render(this.filterComponent, this.filterContainer);
    render(new FilterView(),
      this.filterComponent.getElement());

  }
}
