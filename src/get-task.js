import getRandomBoolean from './utils.js';

export const getTask = () => ({
  title: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 1000,
  tags: new Set([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`,
    `hobby`,
    `procrastination`
  ]),
  picture: `http://picsum.photos/100/100?r=${Math.random()}`,
  color: new Set([
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`
  ]),
  repeatingDays: {
    'Mo': getRandomBoolean,
    'Tu': getRandomBoolean,
    'We': getRandomBoolean,
    'Th': getRandomBoolean,
    'Fr': getRandomBoolean,
    'Sa': getRandomBoolean,
    'Su': getRandomBoolean
  },
  isFavorite: getRandomBoolean,
  isDone: getRandomBoolean
});

// console.log(getTask.repeatingDays);
const hashtags = [...getTask().tags].sort(() => 0.5 - Math.random());
// console.log(hashtags);
