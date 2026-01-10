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
        if (arr[i] != arr[n-i]){
            return false;
        }
    }
    return true;
}

export const secondLargest = (arr) => {
    if (arr.length < 2){
        return null;
    }

    let mx = -Infinity;
    let sec_mx = -Infinity;

    for(let i=0; i<arr.length; i++){
        const curr = arr[i];
        if (curr > mx){
            sec_mx = mx;
            mx = curr;
        }else if (curr > sec_mx && curr < mx) {
            sec_mx = curr;
        }
    }

    return sec_mx === -Infinity ? null: sec_mx;
};

export const sortByProduct = (product) => {
    for (let key in product){
        
    }
}   