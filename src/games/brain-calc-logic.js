import runGameLogic from '../index.js';
import generateRandomNumber from '../random-number.js';

const message = 'What is the result of the expression?';

const getRightAnswer = (randomNumber1, randomNumber2, randomMathOperation) => {
  let result;
  switch (randomMathOperation) {
    case '+':
      result = randomNumber1 + randomNumber2;
      break;
    case '-':
      result = randomNumber1 - randomNumber2;
      break;
    case '*':
      result = randomNumber1 * randomNumber2;
      break;
    default:
      console.log('wrong');
  }
  return result;
};

const runCalcGame = () => {
  const randomNumber1 = generateRandomNumber(10);
  const randomNumber2 = generateRandomNumber(10);
  const randomNumber3 = generateRandomNumber(3-1);
  const mathOpetors = ['+', '-', '*'];
  const randomMathOperation = mathOpetors[randomNumber3];
  const rightAnswer = getRightAnswer(randomNumber1, randomNumber2, randomMathOperation);
  const task = `${randomNumber1} ${randomMathOperation} ${randomNumber2}`;
  return [task, String(rightAnswer)];
};

export default () => runGameLogic(message, runCalcGame);
