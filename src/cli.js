import readlineSync from 'readline-sync';

const greeting = () => {
   console.log('node bin/brain-games.js' + '\n' + 'Welcome to the Brain Games!');
   let userName = readlineSync.question('May I have your name? ');
   console.log('Hello, ' + userName + '!');
};

export default greeting;