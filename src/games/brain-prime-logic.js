import { runGameLogic } from '../index.js';
import { generateRandomNumber } from '../random-number.js';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const runPrimeGame = () => {
  const task = generateRandomNumber(10);
  const rightAnswer = isPrime(task) ? 'yes' : 'no';
  return [task, String(rightAnswer)];
};

export default () => runGameLogic(message, runPrimeGame);
