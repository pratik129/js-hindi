const fname = "Rahul"
const age = 22

// console.log(fname + age + '    Ravi')

// console.log(`${fname} age is ${age}`)

const testName = "Rakesh-hc-com"
console.log(testName.split('-'))

// console.log(testName[0])
// console.log(testName.__proto__)
// console.table([
//     testName.length,
//     testName.toLocaleUpperCase(),
//     testName.charAt(5),
//     testName.indexOf('a'),
// ])

const testString = testName.substring(0,4)
// console.log(testString);

const testString1 = testName.slice(-8, 3)
console.log(testString1);


const newStringOne = "   RAvi    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://abc.com/abc%xyz"


console.log(url.replace("%",'-'))
console.log(url.includes('tito'))
console.log(url.includes('xyz'))
