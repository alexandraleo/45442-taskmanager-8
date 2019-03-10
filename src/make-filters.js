import {default as getRandomNumber} from './utils.js';

const filterNode = document.querySelector(`.main__filter`);
const filters = [
  {filterName: `ALL`, count: getRandomNumber(0, 15), isChecked: true},
  {filterName: `OVERDUE`, count: getRandomNumber(0, 15), isDisabled: true},
  {filterName: `TODAY`, count: getRandomNumber(0, 15)},
  {filterName: `FAVORITES`, count: getRandomNumber(0, 15)},
  {filterName: `REPEATING`, count: getRandomNumber(0, 15)},
  {filterName: `TAGS`, count: getRandomNumber(0, 15), isDisabled: true},
  {filterName: `ARCHIVE`, count: getRandomNumber(0, 15), isDisabled: true}
];

const getFilterElement = (el) => {
  const {filterName, count, isChecked = false, isDisabled = false} = el;
  return `<input
  type="radio"
  id="filter__${filterName}"
  class="filter__input visually-hidden"
  name="filter"
  ${isChecked ? `checked` : ``}
  ${isDisabled ? `disabled` : ``}
/>
  <label for="filter__${filterName}" class="filter__label">
    ${filterName} <span class="filter__${filterName}-count">${count}</span></label
  >`;
};

export const showFilters = () => {
  const fragment = document.createDocumentFragment();
  const parser = new DOMParser();

  filters.forEach((el) => {
    const filterElementString = getFilterElement(el);
    const filterElementObj = parser.parseFromString(filterElementString, `text/html`);
    const childNodes = filterElementObj.body.childNodes;
    childNodes.forEach((elem) => fragment.appendChild(elem));
  });
  filterNode.appendChild(fragment);
};

