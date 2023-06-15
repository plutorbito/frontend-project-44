import readlineSync from 'readline-sync';
// Приветствие
const greeting = () => {
      console.log('Welcome to the Brain Games!');
      let greetingUserName = readlineSync.question('May I have your name? ');
      console.log('Hi ' + greetingUserName + '!');
      return greetingUserName;
   }
   
const userName = greeting();

// Случайное число
const generateRandomNumber = (max) => {
      return Math.trunc(Math.random() * max) + 1;
    }


// Проверка ответа
const checkAnswer = (userAnswer, rightAnswer) => {
   if (rightAnswer === userAnswer) {
      console.log('Correct');
   } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${userName}!)`);
   }
}

export { userName, checkAnswer, generateRandomNumber };