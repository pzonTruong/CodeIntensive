export const sumArray = (arr) => {
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
        summ += arr[i];
    }
    return summ;
}

export const countOccurences = (arr, value) => {
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            cnt += 1;
        }
    }
    return cnt
}

export const removeDuplicate = (arr) => {
    const unique = [...new Set(arr)];
    return unique;
}

export const flattenArray = (arr) => {

    let flattened = []

    arr.map((subArr) => {
        for (let i = 0; i < subArr.length; i++) {
            flattened.push(subArr[i]);
        }
    })

    return flattened;
}

export const isSymmetric = (arr) => {
    const n = arr.length - 1;
    for (let i = 0; i < (arr.length / 2); i++) {
        if (arr[i] != arr[n - i]) {
            return false;
        }
    }
    return true;
}

export const secondLargest = (arr) => {
    if (arr.length < 2) {
        return null;
    }

    let mx = -Infinity;
    let sec_mx = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if (curr > mx) {
            sec_mx = mx;
            mx = curr;
        } else if (curr > sec_mx && curr < mx) {
            sec_mx = curr;
        }
    }

    return sec_mx === -Infinity ? null : sec_mx;
};

export const sortByProduct = (product) => {
    product.sort((a, b) => a.price - b.price);
    return product;
}

export const findMostExpensiveProduct = (products) => {
    products.sort((a, b) => a.price - b.price);
    return products[products.length - 1];
};

export const groupByType = (arr) => {
    let resObj = {};
    for (let i = 0; i < arr.length; i++) {

        if (!resObj[arr[i].type]) {
            resObj[arr[i].type] = [];
        }
        resObj[arr[i].type].push(arr[i].name);
    }
    return resObj;
}

export const isSubset = (arr1, arr2) => {
    if (arr2.length > arr1.length) {
        return false;
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            return false;
        }
    }
    return true;
}


export const findMaxKey = (obj) => {
    let res = Object.keys(obj)[0]
    let mx = Object.values(obj)[0];
    // console.log("res: ", res);
    // console.log('Mx: ', mx);

    for (const key in obj) {
        if (obj[key] > mx) {
            mx = obj[key];
            res = key;
        }
    }
    return res;
}

export const mergeObjectsSumValues = (obj1, obj2) => {
    let resObj = {};

    for (let key in obj1) {
        if (!resObj[key]) {
            resObj[key] = obj1[key];
        } else {
            resObj[key] += obj1[key];
        }
    }

    for (let key in obj2) {
        if (!resObj[key]) {
            resObj[key] = obj2[key];
        } else {
            resObj[key] += obj2[key];
        }
    }
    return resObj;
}

export const countElements = (arr) => {
    let resObj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!resObj[arr[i]]) {
            resObj[arr[i]] = 0;
        }

        resObj[arr[i]] += 1;
    }
    return resObj;
}

export const cleanObj = (obj) => {
    for (let key in obj) {
        if (obj[key] === undefined || obj[key] === null) {
            delete obj[key];
        }
    }
    return obj;
}

export const hasDuplicate = (arr) => {
    let check = [];
    for (let i = 0; i < arr.length; i++) {
        if (check.includes(arr[i])) {
            return true;
        }
        check.push(arr[i]);
    }
    return false;
}

export const sumByGroup = (arr) => {
    let resObj = {};
    for (let i = 0; i < arr.length; i++) {

        if (!resObj[arr[i].type]) {
            resObj[arr[i].type] = 0;
        }
        resObj[arr[i].type] += (arr[i].price);
    }
    return resObj;
}

export const uniqueValues = (arr1, arr2) => {
    let groupArr = [...arr1, ...arr2];
    const res = new Set(groupArr);
    return res;
}

export const isPermutation = (arr1, arr2) => {
    if (arr1.length != arr2.length) {
        return false;
    }

    let cnt_obj1 = {};
    let cnt_obj2 = {};

    for (let i = 0; i < arr1.length; i++) {
        if (!cnt_obj1[arr1[i]]) {
            cnt_obj1[arr1[i]] = 0;
        }
        cnt_obj1[arr1[i]] += 1;
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!cnt_obj2[arr2[i]]) {
            cnt_obj2[arr2[i]] = 0;
        }
        cnt_obj2[arr2[i]] += 1;
    }

    for (let key in cnt_obj1) {
        if (cnt_obj1[key] !== cnt_obj2[key]) {
            return false;
        }
    }
    return true;
}

export const findLongString = (arr) => {
    let l = -1;
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > l) {
            l = arr[i].length;
            res = arr[i];
        }
    }
    return res;
}

export const intersection = (arr1, arr2) => {
    const s = new Set([...arr1, ...arr2]);
    let res = [];
    for (let item of s) {
        if (arr1.includes(item) && arr2.includes(item)) {
            res.push(item);
        }
    }
    return res;
}

export const filteredByMinValue = (arr, value) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= value) {
            res.push(arr[i]);
        }
    }
    return res;
}


export const findLongestValue = (obj) => {
    let arrValue = Object.values(obj);
    let res = arrValue[0];
    for (let i = 1; i < arrValue.length; i++) {
        if (arrValue[i].length > res.length) {
            res = arrValue[i];
        }
    }
    return res;
}

export const groupByFirstLetter = (arr) => {
    let resObj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!resObj[arr[i][0]]) {
            resObj[arr[i][0]] = [];
        }

        resObj[arr[i][0]].push(arr[i]);
    }
    return resObj;
}

export const getAdults = (people) => {
    let resArr = [];
    for (let i = 0; i < people.length; i++) {
        if (people[i].age >= 18) {
            resArr.push(people[i]);
        }
    }
    return resArr;
}

export const convertToArray = (obj) => {
    let res = [];
    let keyArr = Object.keys(obj);
    let valueArr = Object.values(obj);

    for (let i = 0; i < keyArr.length; i++) {
        res.push([keyArr[i], valueArr[i]]);
    }
    return res;
}

export const sortStringByLength = (arr) => {
    let res = arr.sort((a, b) => a.length - b.length);
    return res;
}

export const sumByKey = (obj, k) => {
    let summ = 0;
    for (let i = 0; i < obj.length; i++) {
        summ += obj[i][k];
    }
    return summ;
}

export const countWords = (str) =>{
    let words = str.split(' ');
    return words.length;
}

export const findMinKey = (obj) =>{
    let minKey = null;
    let minVal = Infinity;

    for(const key in obj){
        if(obj[key] < minVal){
            minKey = key;
            minVal = obj[key];
        }
    }
    return minKey;
}