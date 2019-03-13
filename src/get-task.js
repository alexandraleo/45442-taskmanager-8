import getRandomNumber, {getRandomBoolean, getRandomCoin} from './utils.js';

const colorSet = new Set([
  `black`,
  `yellow`,
  `blue`,
  `green`,
  `pink`
]);

const colorArray = [...colorSet];
const anyColor = () => colorArray[getRandomNumber(0, colorArray.length)];

const tagsSet = new Set([
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`,
  `hobby`,
  `procrastination`
]);
const tagsArray = [...tagsSet];
const anyTags = () => {
  tagsArray.sort(() => 0.5 - Math.random());
  const [first, second, third] = tagsArray;
  return [first, second, third].map((it) => `<li> ${it} </li>`).join(``);
};

export const getTask = () => ({
  title: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  tags: anyTags(),
  picture: `http://picsum.photos/100/100?r=${Math.random()}`,
  color: anyColor(),
  repeatingDays: {
    'Mo': getRandomBoolean(),
    'Tu': getRandomBoolean(),
    'We': getRandomBoolean(),
    'Th': getRandomBoolean(),
    'Fr': getRandomBoolean(),
    'Sa': getRandomBoolean(),
    'Su': getRandomBoolean()
  },
  isFavorite: getRandomBoolean(),
  isDone: getRandomBoolean(),
  isRepeating: getRandomCoin()
});
