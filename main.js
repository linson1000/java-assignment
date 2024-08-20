//ANSWER 1

function multiplicationtable() {

  const size = 5;

 
  let header = '  '; 
  for (let i = 1; i <= size; i++) {
      header += i + ' ';
  }
  console.log(header);

  for (let i = 1; i <= size; i++) {
      let row = i + ' '; 
      for (let j = 1; j <= size; j++) {
          row += (i * j) + ' ';
      }
      console.log(row);
  }
}

multiplicationtable();

//ANSWER 2

function stringSize(str) {
  let digits = 0;
  let alphabets = 0;
  let symbols = 0;

  for (let char of str) {
      if (/\d/.test(char)) {
          digits++;
      } else if (/[a-zA-Z]/.test(char)) {
          alphabets++;
      } else if (!/\s/.test(char)) {
          symbols++;
      }
  }

  console.log(`Alphabets: ${alphabets}`);
  console.log(`Digits: ${digits}`);
  console.log(`Symbols: ${symbols}`);
}

stringSize("Hello World! 123!");

//ANSWER 3

function sortNumbersArray(arr) {
  return arr
      .filter(Number.isFinite)  
      .sort((a, b) => a - b);  
}

const arraySort = [5,10,1,2,3,"Numbers",{size: 12},'6'];
const sortedNumbers = sortNumbersArray(arraySort);
console.log(sortedNumbers);

// ANSWER 4

function generateStar(maxStars) {
  const limit = Math.min(maxStars, 3); 
  return Array.from({ length: limit }, (_, i) => '*'.repeat(i + 1)).join('\n');
}

const maxStars = 3;
console.log(generateStar(maxStars));

//ANSWER 5

function possibleSumOfNumbers(target, numbers) {
  let results = [];

  function findCombination(start, current, sum) {
      if (sum === target) {
          results.push(current);
          return;
      }

      for (let i = start; i < numbers.length; i++) {
          findCombination(i + 1, [...current, numbers[i]], sum + numbers[i]);
      }
  }

  findCombination(0, [], 0);

  return results;
}

const target = 5;
const numbers = [1, 3, 5, -3, 2, 4];
console.log(possibleSumOfNumbers(target, numbers)); 
