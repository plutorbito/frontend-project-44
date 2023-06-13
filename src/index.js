import readlineSync from 'readline-sync';

const greeting = () => {
      console.log('brain-calc' + '\n' + 'Welcome to the Brain Games!');
      let greetingUserName = readlineSync.question('May I have your name? ');
      console.log('Hi ' + greetingUserName + '!');
      return greetingUserName;
   }
   
   export const userName = greeting();