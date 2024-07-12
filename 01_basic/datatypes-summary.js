// Primitive 

// 7 types - string, number, boolean, null, undefined, symbol, bigInt

const age = 22
const marks = 65.34
const firstName = "Pratik"
const isLoggedIn = false
let userEmail = null
let mobile;

const id = Symbol('123')
const aid = Symbol('123')

const bigNumber = 12345678912345678912345987n
// console.log(id===aid)
// console.table([typeof age, typeof marks, typeof firstName, typeof isLoggedIn, typeof userEmail,typeof userEmail, typeof mobile, typeof id, typeof aid, typeof bigNumber])


// Non - primitive  - refernces

// 3 types - array, object, function

const cars = ['skoda', 'audi', 'honda']

const person = {
    id: 11,
    name: "test",
    city: "mumbai"
}

let demo = function(){
    console.log('ello')
}

// console.table([typeof cars, typeof person, typeof demo]);


// https://262.ecma-international.org/5.1/#sec-11.4.3


// stack (primitive) - just copy of value

let stack1 = 'this is a stack variable 1';
console.log(stack1)
let stack2 = stack1;
console.log(stack2)
stack2 = 'this is a stack variable 2';

console.log(stack1)
console.log(stack2)

//  heap (non - primitive) - refernce to actual memomry location 

let studen1 = {
    id: 1,
    name: "fname"
}
console.log(studen1.name)
let studen2 = studen1
studen2.name = 'lname'
console.log(studen1.name)
console.log(studen2.name)