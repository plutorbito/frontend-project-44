import runGameLogic from '../index.js';
import { generateRandomNumber, maxNumber } from '../random-number.js';

const message = 'What is the result of the expression?';
const mathOpetors = ['+', '-', '*'];

const getRightAnswer = (randomNumber1, randomNumber2, randomMathOperation) => {
  switch (randomMathOperation) {
    case '+':
      return randomNumber1 + randomNumber2;
    case '-':
      return randomNumber1 - randomNumber2;
    case '*':
      return randomNumber1 * randomNumber2;
    default:
      throw new Error(`Unknown math operation: '${randomMathOperation}'!`);
  }
};

const runCalcGame = () => {
  const randomNumber1 = generateRandomNumber(maxNumber);
  const randomNumber2 = generateRandomNumber(maxNumber);
  const randomNumber3 = generateRandomNumber(mathOpetors.length - 1);
  const randomMathOperation = mathOpetors[randomNumber3];
  const rightAnswer = getRightAnswer(randomNumber1, randomNumber2, randomMathOperation);
  const task = `${randomNumber1} ${randomMathOperation} ${randomNumber2}`;
  return [task, String(rightAnswer)];
};

export default () => runGameLogic(message, runCalcGame);
