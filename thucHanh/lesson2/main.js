import { countOccurences, sumArray, removeDuplicate, flattenArray, isSymmetric, secondLargest
} from './utils.js';

let arr = [1,1,2,3,4,4,5,6]
console.log(removeDuplicate(arr))

let arr2d = [[1,2],[3,4]];
console.log(flattenArray(arr2d))

let symmetricarr = [1,2,3,4,2,1]
console.log(isSymmetric(symmetricarr))

console.log(secondLargest(arr))