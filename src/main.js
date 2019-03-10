import {showFilters} from './make-filters.js';
import {default as showTasks, onFilterLoaderClick} from './make-tasks.js';


const TASKS_QUANTITY = 5;
const taskNode = document.querySelector(`.board__tasks`);

taskNode.addEventListener(`click`, onFilterLoaderClick);

showFilters();
showTasks(TASKS_QUANTITY);
