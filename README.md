# **TypeScript 기초**

> ### **TypeScript**
>
> TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
>
> [TypeScript.org](https://www.typescriptlang.org/)

<br>

# **Basic Type**

- ### string
- ### number
- ### boolean
- ### array
- ### tuple
- ### any
- ### void
- ### never
- ### object
- ### enum

<br>

# **명시적 타입 지정**

## **string**

```JavaScript
const stringConst: string = "string";
let stringLet: string;
```

## **number**

```JavaScript
const numberConst: number = 7;
let numberLet: number;
```

## **boolean**

```JavaScript
const booleanConst: boolean = true;
let booleanLet: boolean;
```

## **array**

```JavaScript
let stringArr: string[];
let numberArr: number[];
let booleanArr: boolean[];
```

## **tuple**

```JavaScript
const tupleConst: [string, number, boolean] = ["string", 7, false];
let tupleLet: [number, string];
```

## **any**

```JavaScript
// any를 타입으로 사용하면, 어떠한 타입도 허용한다. (사용을 권장하지 않음)
let anyLet: any;
anyLet = "string";
anyLet = 7;
anyLet = false;
anyLet = {
    nickname: "Cookie",
    age: 25,
}
```

## **void**

```JavaScript
// void를 상수 또는 변수 타입으로 사용하면, null과 undefined를 할당할 수 있다.
const undefinedType: void = undefined;
const nullType: void = null;

// void를 함수 반환 타입으로 사용하면, 해당 함수는 return값을 가지지 않는다.
function sayHi(name: string): void {
    console.log(`Hello ${name}`);
}
```

## ~~**never**~~

```JavaScript

```

## ~~**enum**~~

```JavaScript

```

<br>

# **함수**

## **Basic Function**

```JavaScript
function getFullName(first: string, last: string): string {
    return `${first} ${last}`;
}

const fullName1 = getFullName("Cookie", "Poky"); // Cookie Poky
const fullName2 = getFullName("Cookie"); // Error: Expected 2 arguments, but got 1.
```

## **Arrow Function (ES6)**

```JavaScript
const getFullName = (first: string, last: string): string => {
    return `${first} ${last}`
}
```

## **Optional properties**

```JavaScript
// 함수의 파라미터에 ?를 함께 사용하면, 해당 매개변수를 필수로 입력하지 않아도 된다.
function getFullName(first: string, last?: string): string {
    return `${first} ${last}`;
}

const fullName1 = getFullName("Cookie", "Poky"); // Cookie Poky
const fullName2 = getFullName("Cookie"); // Cookie undefined
```

```JavaScript
// 단, 매개변수를 필수로 입력하지 않아도 된다면, 매개변수가 들어오지 않을 상황을 고려해야 한다.
function getFullName(first: string, last?: string): string {
    return `${first} ${last ?? ""}`;
}

const fullName1 = getFullName("Cookie", "Poky"); // Cookie Poky
const fullName2 = getFullName("Cookie"); // Cookie
```
