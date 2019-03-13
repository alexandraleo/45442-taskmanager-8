import {showFilters} from './show-filters.js';
import {showRandomTasks} from './show-tasks.js';
import {default as getRandomNumber} from './utils.js';


const TASKS_QUANTITY = 5;
const taskNode = document.querySelector(`.board__tasks`);
const filterNode = document.querySelector(`.main__filter`);
const onFilterLoaderClick = function (evt) {
  if (evt.target.className === `main__filter`) {
    taskNode.innerHTML = ``;
    showRandomTasks(taskNode, getRandomNumber(1, 10));
  }
};

showFilters();
showRandomTasks(taskNode, TASKS_QUANTITY);
filterNode.addEventListener(`click`, onFilterLoaderClick);

