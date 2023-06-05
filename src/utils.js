import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const Format = {
  DATE : 'MMM DD',
  TIME : 'HH:mm',
  HTML_ATTR: 'YYYY-MM-DD',
  MONTH : 'MMM',
  DAY : 'D',
  EDIT_DATE : 'DD/MM/YY',
};

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

function humanizeDateFormat(format, date) {
  return date ? dayjs(date).format(format) : '';
}

function humanizeDate(date){
  return humanizeDateFormat(Format.DATE, date);
}

function humanizeTime(date){
  return humanizeDateFormat(Format.TIME, date);
}

function humanizeEditDate(date){
  return humanizeDateFormat(Format.EDIT_DATE, date);
}

function formatToHtmlAttr(date){
  return humanizeDateFormat(Format.HTML_ATTR, date);
}

function timeDifference(timeFrom, timeTo) {
  const diff = dayjs.duration(dayjs(timeTo).diff(dayjs(timeFrom))).$d;

  return (
    `${diff.days ? `${diff.days }D ` : ''}` +
    `${diff.hours ? `${diff.hours }H ` : ''}` +
    `${diff.minutes ? `${diff.minutes }M ` : ''}`
  );
}

function toUpperCaseFirstLetter(word) {
  return word[0].toUpperCase() + word.slice(1);
}


export {
  getRandomArrayElement,
  getRandomInteger,
  humanizeDate,
  humanizeTime,
  humanizeEditDate,
  formatToHtmlAttr,
  timeDifference,
  toUpperCaseFirstLetter,
};
