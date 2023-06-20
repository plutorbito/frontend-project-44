import readlineSync from 'readline-sync';

const greeting = () => {
  console.log(`node bin/brain-games.js \nWelcome to the Brain Games!`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greeting;
