#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userName, generateRandomNumber , checkAnswer} from '../src/index.js';

const evenGame = () => {
   for (let i = 0; i < 3; i += 1) {
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      let randomNumber = generateRandomNumber(10);
      console.log(randomNumber);
      let userAnswer = readlineSync.question('Your answer: ');
      let rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
      checkAnswer(userAnswer, rightAnswer);
   }
   console.log('Congratulations, ' + userName + '!');
}

evenGame();
export default evenGame;
