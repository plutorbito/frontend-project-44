import { generateRandomNumber, gameLogic } from '../index.js';

const message = 'What number is missing in the progression?';

const progressionGame = () => {
   let progression = generateRandomNumber(10);
   let firstItem = generateRandomNumber(10);
   let missingItem = generateRandomNumber(9);
   let numbersArr = [];
   for (let i = firstItem; numbersArr.length < 10; i += progression) {
      numbersArr.push(i);
      }
   let rightAnswer = numbersArr[missingItem];
   numbersArr[missingItem] = '...';
   const task = numbersArr.join(" ");
   return [task, rightAnswer];
}

gameLogic(message, progressionGame);

export default progressionGame;