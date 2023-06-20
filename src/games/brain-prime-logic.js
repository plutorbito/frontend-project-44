import { generateRandomNumber, gameLogic } from '../index.js';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
  return 'no';
  }
  for (let i = 2; i < num; i += 1) {
   if (num % i === 0) {
      return 'no';
     }
   }
   return 'yes';
 };

const primeGame = () => {
  const randomNumber = generateRandomNumber(10);const task = randomNumber;
  const rightAnswer = isPrime(randomNumber);
  return [task, rightAnswer];
};

gameLogic(message, primeGame);
export default primeGame;
