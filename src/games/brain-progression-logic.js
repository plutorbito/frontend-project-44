import runGameLogic from '../index.js';
import generateRandomNumber from '../random-number.js';

const message = 'What number is missing in the progression?';

const getProgression = (firstItem, progressionItem) => {
  const arr = [];
  for (let i = firstItem; arr.length < 10; i += progressionItem) {
    arr.push(i);
  }
  return arr;
};

const runProgressionGame = () => {
  const progressionItem = generateRandomNumber(10);
  const firstItem = generateRandomNumber(10);
  const missingItem = generateRandomNumber(9);
  const numbersArr = getProgression(firstItem, progressionItem);
  const rightAnswer = numbersArr[missingItem];
  numbersArr[missingItem] = '..';
  const task = numbersArr.join(' ');
  return [task, String(rightAnswer)];
};

export default () => runGameLogic(message, runProgressionGame);
