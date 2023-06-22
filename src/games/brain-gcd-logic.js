import runGameLogic from '../index.js';
import generateRandomNumber from '../random-number.js';

const message = 'Find the greatest common divisor of given numbers.';

const getDivisor = (num1, num2) => {
  let result;
  for (let divisor = 1; divisor <= Math.min(num1, num2); divisor += 1) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      result = divisor;
    }
  }
  return result;
};

const runGcdGame = () => {
  const randomNumber1 = generateRandomNumber(10);
  const randomNumber2 = generateRandomNumber(10);
  const task = `${randomNumber1} ${randomNumber2}`;
  const rightAnswer = getDivisor(randomNumber1, randomNumber2);
  return [task, String(rightAnswer)];
};

export default () => runGameLogic(message, runGcdGame);
