#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from "../src/cli.js";

greeting();

const evenGame = () => {
   for (let i = 0; i < 3; i += 1) {
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      var randomNumber = Math.trunc(Math.random() * 10) + 1;
      console.log(randomNumber);
      var userAnswer = readlineSync.question('Your answer: ');
      let rightAnswer;
      if (randomNumber % 2 === 0) {
         rightAnswer = 'yes';
      } else if (randomNumber % 2 !== 0) {
         rightAnswer = 'no';
      }
      let programReply;
      if (rightAnswer === userAnswer) {
         programReply = console.log('Correct');
      } else {
         return programReply = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${greeting.userName}!)`);
      }
   }
   console.log('Congratulations, ' + greeting.userName + '!');
   
}
evenGame()
export default evenGame;
