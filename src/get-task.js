// import {getRandomBoolean} from './utils.js';

// const colorSet = new Set([
//   `black`,
//   `yellow`,
//   `blue`,
//   `green`,
//   `pink`
// ]);

// const colorArray = [...colorSet];
// const anyColor = () => colorArray[getRandomNumber(0, colorArray.length)];

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
  return [first, second, third];
  // .map((it) => `<li> ${it} </li>`).join(``);
};

const randomPicture = () => {
  return `http://picsum.photos/100/100?r=${Math.random()}`;
};

export const getTask = () => ({
  title: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ][Math.floor(Math.random() * 3)],
  dueDate: (Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000),
  tags: anyTags(),
  picture: randomPicture(),
  repeatingDays: {
    'mo': false,
    'tu': false,
    'we': false,
    'th': false,
    'fr': false,
    'sa': false,
    'su': false
  },
  color: [
    `black`,
    `yellow`,
    `blue`,
    `pink`,
    `green`
  ][Math.floor(Math.random() * 3)],
  state: {}
});

export const Color = {
  blue: `card--blue`,
  black: `card--black`,
  yellow: `card--yellow`,
  green: `card--green`,
  pink: `card--pink`,
};
