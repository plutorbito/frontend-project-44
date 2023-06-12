import readlineSync from 'readline-sync';

const greeting = () => {
   console.log('node bin/brain-games.js' + '\n' + 'Welcome to the Brain Games!');
   var userName = readlineSync.question('May I have your name? ');
   console.log('Hi ' + userName + '!');
}

export default greeting;

