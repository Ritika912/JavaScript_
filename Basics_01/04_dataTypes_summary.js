//#primitive(call by value)

// 7 categories- String, Number, Boolean, Null(empty), undefined, Symbol(to make any value unique), BigInt

const score=100  //Javascript is dynamically typed language

const isLoggedIn=false

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
//Reference type(non-primitive)-Array, Objects, Functions

const heroes=["shaktiman","naagraj",]
let myObje={
    name:"ritika",
    age:22,
}
const myFunction=function(){
    console.log("hello world");
}

console.log(typeof heroes); //non-primitive data types is object