// Primitive types
let stringTypes: string;
let numberTypes: number;
let booleanTypes: boolean;

// Array types
let stringArray: string[];
let numberArray: number[];
let booleanArray: boolean[];

// any types (please don't use)
let obj: any;
obj = "string";
obj = 0;
obj.bar = 100;

// TypeScript automatically infer the types, so in this case you don't need a type annotations.
const nickName: string = "cookie";
const age: number = 13;

// You should add type annotations after each parameter to declare what types of parameters the function accepts.
// You can also add return type annotations after the parameter list.
function getHello(name: string): string {
  return `Hello ${name}`;
}

// Object types
function sayHello(param: { name: string; age: number }) {
  console.log(`Hello ${param.name}(${param.age})`);
}

// Optional properties (Optional Chaning)
function sayHi(name: string, age?: number) {
  console.log(name.toUpperCase());
  if (age !== undefined) {
    console.log(age);
  }
}

// Union types with type keywords
type UnionTypes = number | string[];

function getIDs(id: UnionTypes): number {
  if (typeof id === "number") {
    return id;
  }
  return parseInt(id[0]);
}
