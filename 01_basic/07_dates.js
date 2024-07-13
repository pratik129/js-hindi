let mydate = new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toLocaleString())
// console.log(typeof mydate)

// let newDate = new Date(2024, 0, 22)
// let newDate = new Date(2024, 0, 22, 3, 6)
// let newDate = new Date('2024-02-02')
 let newDate = new Date('01-14-2023')
// console.log(newDate)
// console.log(newDate.toLocaleString())


let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(mydate.getTime()) // get values in mili seconds
// console.log(Math.floor(Date.now()/1000)) 

console.log(mydate.getMonth())

console.log(mydate.getHours()+1)

console.log(mydate.getDay() - 1)

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })
