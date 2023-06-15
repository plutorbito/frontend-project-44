import { generateRandomNumber, gameLogic } from '../index.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
   const randomNumber = generateRandomNumber(10);
   const task = randomNumber;
   let rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
   return [task, rightAnswer];
}

gameLogic(message, evenGame);
export default evenGame;