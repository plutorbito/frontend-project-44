#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greeting = () => {
   console.log('node bin/brain-games.js' + '\n' + 'Welcome to the Brain Games!');
   var greetingUserName = readlineSync.question('May I have your name? ');
   console.log('Hi ' + greetingUserName + '!');
   return greetingUserName;
}

const userName = greeting();

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
         return programReply = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${userName}!)`);
      }
   }
   console.log('Congratulations, ' + userName + '!');
   
}
evenGame()
export default evenGame;
