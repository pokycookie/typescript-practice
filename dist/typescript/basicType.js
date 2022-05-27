"use strict";
// Primitive types
let stringTypes;
let numberTypes;
let booleanTypes;
// Array types
let stringArray;
let numberArray;
let booleanArray;
// any types (please don't use)
let obj;
obj = "string";
obj = 0;
obj.bar = 100;
// TypeScript automatically infer the types, so in this case you don't need a type annotations.
const nickName = "cookie";
const age = 13;
// You should add type annotations after each parameter to declare what types of parameters the function accepts.
// You can also add return type annotations after the parameter list.
function getHello(name) {
    return `Hello ${name}`;
}
// Object types
function sayHello(param) {
    console.log(`Hello ${param.name}(${param.age})`);
}
// Optional properties (Optional Chaning)
function sayHi(name, age) {
    console.log(name.toUpperCase());
    if (age !== undefined) {
        console.log(age);
    }
}
function getIDs(id) {
    if (typeof id === "number") {
        return id;
    }
    return parseInt(id[0]);
}
