"use strict";  //treat all js code as newer version

// alert('sjdhfkjsdf')
/*
o/p
ReferenceError: alert is not defined
Since it not browser, it is not directly supported
*/

let name = "Pratik"
let age = 30
let stockBroker = false

// number => 2 to power 53
// bigint supported but uses only for big apps like trading and commerce
// string => ""
// bool => true/ false
// null => standalone value
// undefined => also a datatype
// symbol => unique


console.table([typeof name,typeof age, typeof stockBroker, typeof undefined, typeof null])
