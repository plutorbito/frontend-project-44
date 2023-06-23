import runGameLogic from '../index.js';
import { generateRandomNumber, maxNumber } from '../random-number.js';

const message = 'What number is missing in the progression?';

const getProgression = (firstItem, progressionItem) => {
  const arr = [];
  for (let i = firstItem; arr.length < 10; i += progressionItem) {
    arr.push(i);
  }
  return arr;
};

const runProgressionGame = () => {
  const progressionItem = generateRandomNumber(maxNumber);
  const firstItem = generateRandomNumber(maxNumber);
  const missingItem = generateRandomNumber(maxNumber - 1);
  const numbersArr = getProgression(firstItem, progressionItem);
  const rightAnswer = numbersArr[missingItem];
  numbersArr[missingItem] = '..';
  const task = numbersArr.join(' ');
  return [task, String(rightAnswer)];
};

export default () => runGameLogic(message, runProgressionGame);
