import {showFilters} from './show-filters.js';
import {showRandomTasks, onFilterLoaderClick} from './show-tasks.js';


const TASKS_QUANTITY = 5;
const taskNode = document.querySelector(`.board__tasks`);

taskNode.addEventListener(`click`, onFilterLoaderClick);

showFilters();
showRandomTasks(taskNode, TASKS_QUANTITY);
