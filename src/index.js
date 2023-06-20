import readlineSync from 'readline-sync';
// Приветствие
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const greetingUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${greetingUserName}!`);
  return greetingUserName;
};

const userName = greeting();

// Случайное число
const generateRandomNumber = (max) => Math.trunc(Math.random() * max) + 1;

// Логика игры
const gameLogic = (message, taskAndRightAnswer) => {
  for (let i = 0; i < 3; i += 1) {
  console.log(message);
  const [task, rightAnswer] = taskAndRightAnswer();
  console.log(`Question: ${task}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (String(rightAnswer) === String(userAnswer)) {
   console.log('Correct');
   } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${userName}!)`);
         return;
      }
   }
   console.log(`Congratulations, ${userName}!`);
}

export { userName, gameLogic, generateRandomNumber };
