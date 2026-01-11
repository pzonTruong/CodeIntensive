import { countOccurences, sumArray, removeDuplicate, flattenArray, isSymmetric, secondLargest,
    sortByProduct, findMostExpensiveProduct, groupByType, isSubset, findMaxKey,
    mergeObjectsSumValues, countElements,
    cleanObj,
    hasDuplicate,
    sumByGroup,
    uniqueValues,
    isPermutation,
    findLongString,
    intersection,
    filteredByMinValue,
    findLongestValue,
    groupByFirstLetter,
    getAdults,
    convertToArray,
    sortStringByLength,
    sumByKey,
    countWords,
    findMinKey,

} from './utils.js';

let arr = [1,1,2,3,4,4,5,6]
console.log(removeDuplicate(arr))

let arr2d = [[1,2],[3,4]];
console.log(flattenArray(arr2d))

let symmetricarr = [1,2,3,4,2,1]
console.log(isSymmetric(symmetricarr))

console.log(secondLargest(arr))

let products = [
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 50 }
];

//console.log(sortByProduct(products));
console.log(findMostExpensiveProduct(products))

let arr2 = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' }
];

console.log(groupByType(arr2));

let arr1 = [1, 2, 3, 4];
let arr3 = [2, 4];

console.log(isSubset(arr1, arr3));

let obj = { a: 10, b: 20, c: 15 };
console.log(findMaxKey(obj))

let obj1 = { a: 10, b: 20 };
let obj2 = { b: 30, c: 40 };

console.log(mergeObjectsSumValues(obj1, obj2));

let ch_arr =  ['a', 'b', 'a', 'c', 'b', 'a'];
console.log(countElements(ch_arr));

let clean_obj = { a: 1, b: null, c: undefined, d: 4 }
console.log(cleanObj(clean_obj));

let duparr = [1, 2, 3, 4, 2]
console.log(hasDuplicate(duparr))

let grouparr = [
    { type: 'fruit', price: 10 },
    { type: 'vegetable', price: 20 },
    { type: 'fruit', price: 30 }
];

console.log(sumByGroup(grouparr));

let unique_arr1 = [1, 2, 3];
let unique_arr2 = [3, 4, 5];

console.log(uniqueValues(unique_arr2, unique_arr1));

let perm_arr1 = [1, 2, 3];
let perm_arr2 = [3, 2, 1];

console.log(isPermutation(perm_arr1, perm_arr2));

let str_arr = ['abc', 'abcd', 'a']
console.log(findLongString(str_arr));

let inter_arr1 = [1, 2, 3];
let inter_arr2 = [2, 3, 4];
console.log(intersection(inter_arr1, inter_arr2));

let unfiltered = [5, 10, 15, 20];
let minValue = 12;

console.log(filteredByMinValue(unfiltered, minValue));

let longest_obj = { a: 'cat', b: 'elephant', c: 'dog' };
console.log(findLongestValue(longest_obj));

let firstCh_arr = ['apple', 'banana', 'avocado', 'blueberry'];
console.log(groupByFirstLetter(firstCh_arr));

let people = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 16 },
    { name: 'David', age: 22 }
];
console.log(getAdults(people))

let arr_obj = { a: 1, b: 2, c: 3 };
console.log(convertToArray(arr_obj));

let str_arr_2 = ['a', 'ccc', 'bb'];
console.log(sortStringByLength(str_arr_2));

let obj_arr = [
    { type: 'fruit', price: 10 },
    { type: 'vegetable', price: 20 },
    { type: 'fruit', price: 30 }
];
let key = 'price';
console.log(sumByKey(obj_arr, key));

let cnt_str = "Hello world! Welcome to JavaScript";
console.log(countWords(cnt_str));

let minKey_obj = { a: 100, b: 20, c: 50 };
console.log(findMinKey(minKey_obj));