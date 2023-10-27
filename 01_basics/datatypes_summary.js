// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 2337812462901747n


// Reference
// Array, Objects, Functions

const heros = ["Krish", "Shaktimaan", "Naagraj"];
let myObj = {
    name: "Aditya",
    age: 22
}

const myFunction = function(){
  console.log("Hello World");
}

console.log(typeof myFunction);