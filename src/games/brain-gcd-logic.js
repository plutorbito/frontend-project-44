import { generateRandomNumber, gameLogic } from '../index.js';

const message = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
      let randomNumber1 = generateRandomNumber(10);
      let randomNumber2 = generateRandomNumber(10);
      const task = `${randomNumber1}  ${randomNumber2}`;
      let rightAnswer;
      for (let divisor = 1; divisor <= Math.min(randomNumber1, randomNumber2); divisor += 1) {
         if (randomNumber1 % divisor === 0 && randomNumber2 % divisor === 0) {
            rightAnswer = divisor;
         }
      }
      return [task, rightAnswer];
}

gameLogic(message, gcdGame);
export default gcdGame;