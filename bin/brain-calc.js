#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { generateRandomNumber, checkAnswer, userName } from '../src/index.js';

const calcGame = () => {
   for (let i = 0; i < 3; i += 1) {
      console.log('What is the result of the expression?');
      let randomNumber1 = generateRandomNumber(10);
      let randomNumber2 = generateRandomNumber(10);
      let randomNumber3 = generateRandomNumber(3);
      let randomMathOperation;
      let rightAnswer;
      switch(randomNumber3) {
         case 1:
            randomMathOperation = "+";
            rightAnswer = randomNumber1 + randomNumber2;
            break;
         case 2:
            randomMathOperation = "-";
            rightAnswer = randomNumber1 - randomNumber2;
            break;
         case 3:
            randomMathOperation = "*";
            rightAnswer = randomNumber1 * randomNumber2;
            break;
      }
      console.log(`${randomNumber1} ${randomMathOperation} ${randomNumber2}`);
      let userAnswer = readlineSync.question('Your answer: ');
      checkAnswer(Number(userAnswer), rightAnswer);
   }
   console.log('Congratulations, ' + userName + '!');
}

calcGame()
export default calcGame;