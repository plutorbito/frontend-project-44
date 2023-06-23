import runGameLogic from '../index.js';
import { generateRandomNumber, maxNumber } from '../random-number.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const runEvenGame = () => {
  const task = generateRandomNumber(maxNumber);
  const rightAnswer = isEven(task) ? 'yes' : 'no';
  return [task, String(rightAnswer)];
};

export default () => runGameLogic(message, runEvenGame);
