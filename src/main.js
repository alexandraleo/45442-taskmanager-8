import {showFilters} from './show-filters.js';
import {getTask} from './get-task.js';
import {default as Task} from './task.js';
import {default as TaskEdit} from './task-edit.js';

const taskNode = document.querySelector(`.board__tasks`);
const filterNode = document.querySelector(`.main__filter`);
const task = getTask();

const onFilterLoaderClick = function (evt) {
  if (evt.target.className === `main__filter`) {

    const filterTask = new Task(task);
    taskNode.appendChild(filterTask.render());
  }
};

showFilters();
filterNode.addEventListener(`click`, onFilterLoaderClick);

const taskComponent = new Task(task);
const editTaskComponent = new TaskEdit(task);

taskNode.appendChild(taskComponent.render());

taskComponent.onEdit = () => {
  editTaskComponent.render();
  taskNode.replaceChild(editTaskComponent.element, taskComponent.element);
  taskComponent.unrender();
};

editTaskComponent.onSubmit = (newObject) => {
  task.title = newObject.title;
  task.tags = newObject.tags;
  task.color = newObject.color;
  task.repeatingDays = newObject.repeatingDays;
  task.dueDate = newObject.dueDate;

  taskComponent.update(task);
  taskComponent.render();
  taskNode.replaceChild(taskComponent.element, editTaskComponent.element);
  editTaskComponent.unrender();
};

