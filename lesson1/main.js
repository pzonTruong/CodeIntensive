console.log("hello")

const price = 10000
const renderUI = `Giá: ${price} VND`;
console.log(renderUI)

//hoac co the dung 

const price2 = Number(10000).toLocaleString();
const renderUI2 = `Price: ${price2} VND`
console.log(renderUI2)


let n = 'Son';
let age = 19;
let school = 'UET';
let intro = `Tên tôi là ${n}, tôi ${age} tuổi. Hiện đang học tại ${school}`;
console.log(intro);

//Function

// JS co 2 loai function
// 1. Normal function
// 2. Arrow function

let ten = 'Son'
function greet(name){
    return `Hello ${name}`
}
console.log(greet(ten))

const funcName = (ten) =>{
    return `Hello ${ten}`
}

console.log(funcName(ten))

// Module
import {add, multiply} from './math.js'

console.log(add(10, 20))
console.log(multiply(10, 20))