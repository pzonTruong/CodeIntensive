import { productInfo, greet, sumUpTo, square, 
    isEven, firstEle, summ, toUpperCase, printNames, 
    stringLength, splitInfo, formatCurrency,
    maxEle, isPrime, repeatNthTimes, sumOdd,
    sumGreaterThan, formatDate, firstThree,
    containChar, mergedArr, countOccurences,
    FilteredOdd, greaterthan, factorial, 
    separateEvenOdd, sortAsc, sumEvenIndex,
    multiplyByTwo, arrayToString
} from './utils.js';

console.log(productInfo('Sách', 20000));
console.log(greet('An'));
console.log(sumUpTo(5));
console.log(square(6));
console.log(isEven(4));
console.log(firstEle([1,2,3,4,4]))
console.log(summ(1,2,3,4))

const user = { name: "Nam", age: 30 };
console.log(splitInfo(user))

const people = [{ name: "And" }, { name: "Bình" }];
console.log(printNames(people))

let str = 'Hello World';
console.log(stringLength(str))

console.log(toUpperCase(str))

console.log(formatCurrency(1000000))

console.log(maxEle([1,3,6,8,4]))

console.log(isPrime(29))

repeatNthTimes("Hello", 5)

console.log(sumOdd([1,2,3,4]))

console.log(sumGreaterThan([1,2,3,4],2))

console.log(formatDate("2024-11-28"));

console.log(firstThree([1,2,3,4,5]))

console.log(containChar("javascript", "j"));

console.log(mergedArr([1,2],[3,4]));

console.log(countOccurences([1,2,2,3,2],2))

console.log(FilteredOdd([1,2,3,4]))

console.log(greaterthan([1,2,3,4],2));

console.log(factorial(5));