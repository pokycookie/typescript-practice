# **TypeScript 기초**

> ### **TypeScript**
>
> TypeScript is a strongly typed programming language that builds on TypeScript, giving you better tooling at any scale.
>
> [TypeScript.org](https://www.typescriptlang.org/)

<br>

## **Basic Type**

- **string**
- **number**
- **boolean**
- **array**
- **tuple**
- **any**
- **void**
- **never**
- **object**
- **enum**

<br>

## **명시적 타입 지정**

### **string**

```TypeScript
const stringConst: string = "string";
let stringLet: string;
```

### **number**

```TypeScript
const numberConst: number = 7;
let numberLet: number;
```

### **boolean**

```TypeScript
const booleanConst: boolean = true;
let booleanLet: boolean;
```

### **array**

```TypeScript
let stringArr: string[];
let numberArr: number[];
let booleanArr: boolean[];
```

### **tuple**

```TypeScript
const tupleConst: [string, number, boolean] = ["string", 7, false];
let tupleLet: [number, string];
```

### **any**

```TypeScript
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

### **void**

```TypeScript
// void를 상수 또는 변수 타입으로 사용하면, null과 undefined를 할당할 수 있다.
const undefinedType: void = undefined;
const nullType: void = null;

// void를 함수 반환 타입으로 사용하면, 해당 함수는 return값을 가지지 않는다.
function sayHi(name: string): void {
    console.log(`Hello ${name}`);
}
```

### ~~**never**~~

```TypeScript

```

### ~~**enum**~~

```TypeScript

```

### Union type

```TypeScript
// 아래와 같이 '|'연산자를 이용하면 OR 연산과 비슷하게 두 개의 타입을 동시에 사용할 수 있다.
// 단, 이러한 Union타입을 함수의 인자로 사용하는 경우, 함수내에서 타입 확인이 필요하다.
function getText(text: string | string[]): string {
  if (typeof text === "string") {
    return text;
  }
  return text[0];
}
```

```TypeScript
interface Person {
  name: string;
  age: number;
}
interface Students {
  name: string;
  major: string;
}

// 따로 타입확인을 하지 않는 경우, 타입의 교집합인 프로퍼티를 제외하고는 사용할 수 없다.
// 원하는 형태의 타입이 들어오지 않을 가능성을 항상 고려해야 하기 때문이다.

function showInfo(someone: Person | Students): void {
  // name 프로퍼티는 Person과 Students에서 모두 사용되었기 때문에 타입확인 없이 사용가능하다.
  console.log(someone.name);

  // Error: Property 'age' does not exist on type 'Person | Students'.
  // Error: Property 'age' does not exist on type 'Students'.
  console.log(someone.age);

  // Error: Property 'major' does not exist on type 'Person | Students'.
  // Error: Property 'major' does not exist on type 'Person'.
  console.log(someone.major);
}
```

### Intersection type

```TypeScript

interface Person {
  name: string;
  age: number;
}
interface Students {
  major: string;
}

// 아래와 같이 '&'연산자를 이용하면 두 개의 타입을 동시에 사용할 수 있다.
// 이는 두 타입의 합집합과 같다.
const cookie: Person & Students = {
  name: "cookie",
  age: 25,
  major: "TypeScript",
};
```

<br>

## **Type Aliases**

### **Basic type Aliases**

```TypeScript
type myString = string;
const myName: myString = "cookie";
```

### **Union type Aliases**

```TypeScript
type MyType = string | number | [string, boolean];

const myName: MyType = "cookie";
const myAge: MyType = 21;
const myGender: MyType = ["man", true];
const isStudents: MyType = false; // Error: Type 'boolean' is not assignable to type 'myType'.
```

```TypeScript
type Color = "red" | "green" | "blue";

const myColor1: Color = "red"
const myColor2: Color = "white" // Error: Type '"white"' is not assignable to type 'Color'.
```

### **Object type Aliases**

```TypeScript
type Person = {
  name: string;
  age: number;
};

const cookie: Person = {
  name: "cookie",
  age: 23,

  gender: "man",
  // Error: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
  // Error: Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
};
```

### **Gereric**

```TypeScript
type Person<T, V> = {
  name: T;
  age: V;
};

const cookie: Person<string, string> = {
  name: "cookie",
  age: "21",
};
```

<br>

## **Function**

### **Basic Function**

```TypeScript
function getFullName(first: string, last: string): string {
    return `${first} ${last}`;
}

const fullName1 = getFullName("Cookie", "Poky");    // Cookie Poky
const fullName2 = getFullName("Cookie");            // Error: Expected 2 arguments, but got 1.
```

### **Arrow Function (ES6)**

```TypeScript
const getFullName = (first: string, last: string): string => {
    return `${first} ${last}`
}
```

### **Optional properties**

```TypeScript
// 함수의 파라미터에 ?를 함께 사용하면, 해당 매개변수를 필수로 입력하지 않아도 된다.
function getFullName(first: string, last?: string): string {
    return `${first} ${last}`;
}

const fullName1 = getFullName("Cookie", "Poky");    // Cookie Poky
const fullName2 = getFullName("Cookie");            // Cookie undefined
```

```TypeScript
// 단, 매개변수를 필수로 입력하지 않아도 된다면, 매개변수가 들어오지 않을 상황을 고려해야 한다.
function getFullName(first: string, last?: string): string {
    return `${first} ${last ?? ""}`;
}

const fullName1 = getFullName("Cookie", "Poky");    // Cookie Poky
const fullName2 = getFullName("Cookie");            // Cookie
```

### **[Rest Parameters](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters) (ES6)**

```TypeScript
function sum(num: number, ...numArr: number[]): number {
  let result = num;
  numArr.forEach((element) => {
    result += element;
  });
  return result;
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

<br>

## **Interface**

### **Object**

```TypeScript
const me = {
  name: "cookie",
  age: 25,
};

function getID(obj: { name: string; age: number }) {
  return `${obj.name}-${obj.age}`;
}

console.log(getID(me)); // cookie-25
```

```TypeScript
// interface 키워드를 이용하면 object의 상세 타입을 정의할 수 있다.
interface Person {
  name: string;
  age: number;
}

const me: Person = {
  name: "cookie",
  age: 25,
};

function getID(obj: Person) {
  return `${obj.name}-${obj.age}`;
}

console.log(getID(me)); // cookie-25
```

### **Optional properties**

```TypeScript
interface Person1 {
  name: string;
  age: number;
}
interface Person2 {
  name: string;
  age?: number;
}

// Error: Property 'age' is missing in type '{ name: string; }' but required in type 'Person1'.
// Error: 'age' is declared here.
const cookie: Person1 = {
  name: "cookie",
};

// No Error (No need to use age properties, because it's optional)
const poky: Person2 = {
  name: "poky",
};
```

### **Read only**

```TypeScript
interface Person {
  readonly name: string;
  age: number;
}

const cookie: Person = {
  name: "cookie",
  age: 25,
};

console.log(cookie.name);   // cookie
console.log(cookie.age);    // 25

cookie.name = "poky";       // Error: Cannot assign to 'name' because it is a read-only property.
cookie.age = 26;            // No Error
```

### **Unknown properties (Index signiture)**

```TypeScript
// 새로운 property를 허용하기 위해 [key: type]형태를 interface내에 선언한다.
// 아래의 경우 string을 key로, string 또는 number을 value로 가지는 property에 대해서는 추가를 허용한다.
interface Person {
  readonly name: string;
  [key: string]: string | number;
}

const cookie: Person = {
  name: "cookie",
  nickname: "poky",
  age: 25,
  isMan: true, // Error: Type 'boolean' is not assignable to type 'string | number'.
};
```

### **Function (Call signiture)**

```TypeScript
interface Signitures {
  (name: string, age: number): string;
}

// userName: string, userAge: number, return: string
const getID1: Signitures = (userName, userAge) => {
  return `${userName}-${userAge}`;
};

// myName: string, myAge: number, return: string
const getID2: Signitures = function (myName, myAge) {
  return `${myName}-${myAge}`;
};

// Call signitures with type
type Signitures2 = (name: string, age: number) => string;
```

### **Class (Implements)**

```TypeScript
interface Person {
  name: string;
  age: number;
  getLevel(): string;
  setLevel(level: string): void;
}

// interface에 정의된 프로퍼티나 메소드를 구현하지 않은 경우
class Students1 implements Person {
  // Error: Class 'Students1' incorrectly implements interface 'Person'.
  // Error: Type 'Students1' is missing the following properties from type 'Person': name, age, getLevel, setLevel
}

// interface에 정의된 프로퍼티와 메소드를 모두 구현한 경우 (추가적인 프로퍼티와 메소드 생성 가능)
// interface에 정의된 프로퍼티는 public으로만 구현가능 (private이나 protected는 불가; readonly 사용)
class Students2 implements Person {
  public name: string;
  public age: number;
  public level: string = "C";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getLevel(): string {
    return this.level;
  }

  setLevel(level: string): void {
    this.level = level;
  }

  getInfo() {
    return {
      name: this.name,
      age: this.age,
      level: this.age,
    };
  }
}
```

### **Constructor interface**

```TypeScript
interface Animal {
  name: string;
  age: number;
}

// 생성자함수 타입을 인터페이스로 정의할 수 있다.
interface AnimalConstructor {
  new (name: string, age: number): Animal;
}

class Dog implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 정의한 생성자함수 타입을 함수의 인수로 사용할 수 있다.
function createAnimal(cons: AnimalConstructor, name: string, age: number) {
  return new cons(name, age);
}

createAnimal(Dog, "Messi", 5);
```

> ##### ref: [https://hyunseob.github.io/](https://hyunseob.github.io/2016/10/17/typescript-interface/)

### **Extends**

#### extends 확장자를 이용한 인터페이스 확장

```TypeScript
interface Person {
  readonly name: string;
  age: number;

  sayHi(): void;
}

// extends를 이용해 Students interface에 Person interface를 상속
interface Students extends Person {
  readonly major: string;

  setMajor(major: string): void;
  getMajor(): string;
}

// Person을 상속받은 Students interface를 사용하였기 때문에 Person과 Students interface를 모두 구현해야 한다.
class Me implements Students {
  public name;
  public age;
  public grade = 1;
  public major = "TypeScript";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHi(): void {
    console.log(`Hello ${this.name}`);
  }
  setMajor(major: string): void {
    this.major = major;
  }
  getMajor(): string {
    return this.major;
  }
}

```

#### 다중 인터페이스 확장

```TypeScript
interface Person {
  readonly name: string;
  age: number;

  sayHi(): void;
}

interface Singer {
  album: string[];

  getAlbum(count: number): string[];
}

// 아래와 같이 두 개 이상의 interface를 하나의 interface에 다중으로 상속할 수 있다.
interface Students extends Person, Singer {
  readonly major: string;

  setMajor(major: string): void;
  getMajor(): string;
}

// 아래의 Me Class는 Person, Singer, Students interface를 모두 구현해야 한다.
class Me implements Students {
  public name;
  public age;
  public grade = 1;
  public major = "TypeScript";
  public album = ["album1", "album2", "album3"];

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHi(): void {
    console.log(`Hello ${this.name}`);
  }
  setMajor(major: string): void {
    this.major = major;
  }
  getMajor(): string {
    return this.major;
  }
  getAlbum(count: number): string[] {
    return this.album.filter((element, index) => index < count);
  }
}
```

#### Class를 이용한 인터페이스 확장

```TypeScript
// Later...
```

#### Class에 두 개 이상의 인터페이스 사용하기

```TypeScript
interface Person {
  readonly name: string;
  age: number;

  sayHi(): void;
}

interface Students {
  readonly major: string;

  setMajor(major: string): void;
  getMajor(): string;
}

// 아래와 같이 두 개 이상의 interface를 한번에 사용할 수 있다.
class Me implements Person, Students {
  public name;
  public age;
  public grade = 1;
  public major = "TypeScript";

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHi(): void {
    console.log(`Hello ${this.name}`);
  }
  setMajor(major: string): void {
    this.major = major;
  }
  getMajor(): string {
    return this.major;
  }
}
```

### **Declaration merging**

```TypeScript
// 같은 이름의 interface를 중첩해서 사용하면, 모든 프로퍼티와 메서드가 하나로 합쳐진다.
interface Person {
  name: string;
}
interface Person {
  age: number;
}
interface Person {
  height: number;
}

const person: Person = {
  name: "cookie",
  age: 23,
  height: 175,
};
```

> ##### ref: [typescriptlang.org](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces)

<br>

## **Class**

<br>

## **Generic**
