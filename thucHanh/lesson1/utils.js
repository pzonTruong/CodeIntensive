export const productInfo = (name, price) => {
    const formattedPrice = Number(price).toLocaleString("vi-VN");
    return `Sản phẩm: ${name}, Giá: ${formattedPrice} VND`;
}

export const greet = (name) => {
    return `Xin chào, ${name}!`;
}

export const sumUpTo = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return `${sum}`;
}

export const square = (x) => {
    return x * x;
}

export const isEven = num => num % 2 === 0;

export const firstEle = (arr) => {
    return arr[0]
}

export const summ = (...arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

export const splitInfo = (users) => {
    return `Name: ${users.name}, Age: ${users.age}`
}

export const printNames = (people) => {
    let resStr = '';
    for (let i = 0; i < people.length; i++) {
        resStr += people[i].name;
        if (i != people.length - 1) {
            resStr += ', ';
        }
    }
    return resStr;
}

export const stringLength = str => str.length;

export function toUpperCase(str) {
    return str.toUpperCase();
}

export const formatCurrency = (amount) => {
    const formatted = Number(amount).toLocaleString("vi-VN");
    return `${formatted} VND`
}

export const maxEle = (arr) => {
    let mx = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mx) {
            mx = arr[i]
        }
    }
    return mx
}

export const isPrime = (num) => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}

export const repeatNthTimes = (str, num) => {
    for (let i = 0; i < num; i++) {
        console.log(str);
    }
}

export const sumOdd = (arr) => {
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            summ += arr[i];
        }
    }
    return summ;
}

export const sumGreaterThan = (arr, n) => {
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            summ += arr[i];
        }
    }
    return summ;
}

export const formatDate = (date) => {
    let arr = date.split("-");
    return `${arr[2]}/${arr[1]}/${arr[0]}`
}

export const firstThree = (arr) => {
    if (arr.length < 3) {
        return 'No';
    }
    return `${arr[0]} ${arr[1]} ${arr[2]}`
}

export const containChar = (str, c) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == c) {
            return true
        }
    }
    return false;
}

export const mergedArr = (arr1, arr2) => {
    let res = arr1.concat(arr2);
    return res
}

export const countOccurences = (arr, n) => {
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            cnt += 1;
        }
    }
    return cnt;
}

export const FilteredOdd = (arr) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            res.push(arr[i]);
        }
    }
    return res
}

export const greaterthan = (arr, n) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            res.push(arr[i]);
        }
    }
    return res;
}

export const factorial = (n) =>{
    let res = 1;
    for (let i=2; i<=n; i++){
        res *= i;
    }
    return res;
}

export const separateEvenOdd = (arr) => {
  return arr.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc.even.push(num);
    } else {
      acc.odd.push(num);
    }
    return acc;
  }, { even: [], odd: [] });
};

export const sortAsc = (arr) => {
  return [...arr].sort((a, b) => a - b);
};

export const sumEvenIndex = (arr) => {
  return arr.reduce((total, val, index) => {
    return index % 2 === 0 ? total + val : total;
  }, 0);
};

export const multiplyByTwo = (arr) => {
  return arr.map(num => num * 2);
};

export const arrayToString = (arr) => {
  return arr.join('');
};