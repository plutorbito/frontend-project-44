import { generateRandomNumber, gameLogic } from '../index.js';

const message = 'What number is missing in the progression?';

const progressionGame = () => {
  const progression = generateRandomNumber(10);
  const firstItem = generateRandomNumber(10);
  const missingItem = generateRandomNumber(9);
  const numbersArr = [];
  for (let i = firstItem; numbersArr.length < 10; i += progression) {
    numbersArr.push(i);
  }
  const rightAnswer = numbersArr[missingItem];
  numbersArr[missingItem] = '...';
  const task = numbersArr.join(' ');
  return [task, rightAnswer];
};

gameLogic(message, progressionGame);

export default progressionGame;
