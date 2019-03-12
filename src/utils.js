export default function getRandomNumber(min = 0, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// array.sort(() => 0.5 - Math.random());

export const getRandomBoolean = () => (Math.floor(Math.random() * 2) === 0);
