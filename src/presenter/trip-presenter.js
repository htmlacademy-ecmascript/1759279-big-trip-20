import SortView from '../view/sort-view';
import NewPointView from '../view/new-point-view';
import EditPointView from '../view/edit-point-view';
import PointView from '../view/point-view';
import TripTemplateView from '../view/trip-view';
import ListPointView from '../view/point-list-view';
import {render} from '../render.js';


export default class TripPresenter {
  tripComponent = new TripTemplateView();
  listPointComponent = new ListPointView();

  constructor ({tripContainer}) {
    this.tripContainer = tripContainer;
  }


  init() {
    render(this.tripComponent, this.tripContainer);
    render(new SortView(),
      this.tripComponent.getElement());
    render(this.listPointComponent, this.tripComponent.getElement());
    render(new EditPointView(),
      this.listPointComponent.getElement());
    render(new NewPointView(),
      this.listPointComponent.getElement());


    for (let i = 0; i < 3; i++) {
      render(new PointView(),
        this.listPointComponent.getElement());
    }


  }
}
