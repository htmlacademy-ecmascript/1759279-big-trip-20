import SortView from '../view/sort-view';
// import NewPointView from '../view/new-point-view';
import EditPointView from '../view/edit-point-view';
import PointView from '../view/point-view';
import TripTemplateView from '../view/trip-view';
import ListPointView from '../view/point-list-view';
import {render} from '../render.js';


export default class TripPresenter {
  tripComponent = new TripTemplateView();
  listPointComponent = new ListPointView();

  constructor ({tripContainer, pointsModel}) {
    this.tripContainer = tripContainer;
    this.pointsModel = pointsModel;
  }


  init() {

    this.tripPoints = [...this.pointsModel.getPoints()];


    render(this.tripComponent, this.tripContainer);
    render(new SortView(),
      this.tripComponent.getElement());
    render(this.listPointComponent, this.tripComponent.getElement());
    render(new EditPointView(),
      this.listPointComponent.getElement());
    // render(new NewPointView(),
    //   this.listPointComponent.getElement());


    for (let i = 0; i < this.tripPoints.length; i++) {
      render(new PointView({point: this.tripPoints}),
        this.listPointComponent.getElement());
    }


  }
}
