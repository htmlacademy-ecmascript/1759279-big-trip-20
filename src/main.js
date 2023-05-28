import { render } from './render.js';
import TripPresenter from './presenter/trip-presenter.js';
import FilterView from './view/filter-view.js';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');


const tripPresenter = new TripPresenter({tripContainer: siteMainElement});

render(new FilterView(), siteHeaderElement);

tripPresenter.init();

