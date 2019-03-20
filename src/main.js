import {showFilters} from './show-filters.js';
import {getTask} from './get-task.js';
import {default as Task} from './task.js';
import {default as TaskEdit} from './task-edit.js';

const taskNode = document.querySelector(`.board__tasks`);
const filterNode = document.querySelector(`.main__filter`);

const onFilterLoaderClick = function (evt) {
  if (evt.target.className === `main__filter`) {
    const filterTask = new Task(getTask);
    taskNode.appendChild(filterTask.render());
  }
};

showFilters();
filterNode.addEventListener(`click`, onFilterLoaderClick);

const taskComponent = new Task(getTask);
const editTaskComponent = new TaskEdit(getTask);

taskNode.appendChild(taskComponent.render());

taskComponent.onEdit = () => {
  editTaskComponent.render();
  taskNode.replaceChild(editTaskComponent.element, taskComponent.element);
  taskComponent.unrender();
};

editTaskComponent.onSubmit = () => {
  taskComponent.render();
  taskNode.replaceChild(taskComponent.element, editTaskComponent.element);
  editTaskComponent.unrender();
};

