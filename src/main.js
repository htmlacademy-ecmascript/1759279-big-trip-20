import TripPresenter from './presenter/trip-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsModel from './model/points-model.js';


const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');

const pointsModel = new PointsModel();
const tripPresenter = new TripPresenter({tripContainer: siteMainElement, pointsModel});
const filterPresenter = new FilterPresenter({filterContainer: siteHeaderElement, pointsModel});

tripPresenter.init();
filterPresenter.init();

