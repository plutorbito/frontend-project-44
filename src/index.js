import readlineSync from 'readline-sync';
// Приветствие
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const greetingUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${greetingUserName}!`);
  return greetingUserName;
};

// Логика игры
const runGameLogic = (message, getTaskAndRightAnswer) => {
  const userName = greeting();
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    console.log(message);
    const [task, rightAnswer] = getTaskAndRightAnswer();
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${userName}!)`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { runGameLogic };
