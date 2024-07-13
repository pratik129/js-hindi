const totalMarks = 600
// console.log(totalMarks)

const marks = new Number(600.999)
// console.log(marks)

// console.table([
//     marks.toLocaleString.length,
//     marks.toFixed(2),
//     marks.toExponential,
//     marks.toLocaleString,
//     marks.valueOf,
//     marks.toPrecision(4)
// ])

const bigNumber = 1000000
// console.log(bigNumber.toLocaleString('en-IN'))
// console.log(bigNumber.toLocaleString('en-US'))


//////////////////////////////////////// Math //////////////////////////////

// console.log(Math)
// console.table([
//     Math.abs(-5),
//     Math.round(4.3),
//     Math.ceil(4.3),
//     Math.floor(4.3),
//     Math.min(2,8,4,6,9),
//     Math.max(2,8,4,6,9),
// ])

// console.log(Math.random())
// console.log(Math.random()*10)
// console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min)