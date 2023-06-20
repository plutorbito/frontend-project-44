import { generateRandomNumber, gameLogic } from '../index.js';

const message = 'What is the result of the expression?';

const calcGame = () => {
  const randomNumber1 = generateRandomNumber(10);
  const randomNumber2 = generateRandomNumber(10);
  const randomNumber3 = generateRandomNumber(3);
  let randomMathOperation;
  let rightAnswer;
  switch (randomNumber3) {
    case 1:
      randomMathOperation = '+';
      rightAnswer = randomNumber1 + randomNumber2;
      break;
    case 2:
      randomMathOperation = '-';
      rightAnswer = randomNumber1 - randomNumber2;
      break;
    case 3:
      randomMathOperation = '*';
      rightAnswer = randomNumber1 * randomNumber2;
      break;
    default:
      console.log('wrong');
  }
  const task = `${randomNumber1} ${randomMathOperation} ${randomNumber2}`;
  return [task, rightAnswer];
};

gameLogic(message, calcGame);
export default calcGame;
