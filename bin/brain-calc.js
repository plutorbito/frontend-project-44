#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greeting = () => {
   console.log('brain-calc' + '\n' + 'Welcome to the Brain Games!');
   let greetingUserName = readlineSync.question('May I have your name? ');
   console.log('Hi ' + greetingUserName + '!');
   return greetingUserName;
}

const userName = greeting();

const calcGame = () => {
   for (let i = 0; i < 3; i += 1) {
      console.log('What is the result of the expression?');
      let randomNumber1 = Math.trunc(Math.random() * 10) + 1;
      let randomNumber2 = Math.trunc(Math.random() * 10) + 1;
      let randomNumber3 = Math.trunc(Math.random() * 3) + 1;
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
            break
      }
      console.log(`${randomNumber1} ${randomMathOperation} ${randomNumber2}`);
      let userAnswer = readlineSync.question('Your answer: ');
      let programReply;
      if (rightAnswer === Number(userAnswer)) {
         programReply = console.log('Correct');
      } else {
         return programReply = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${userName}!)`);
      }
   }
   console.log('Congratulations, ' + userName + '!');
   
}
calcGame()
export default calcGame;