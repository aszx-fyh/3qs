class Animal {
  public name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  constructor(thename: string) {
    super(thename);
  }
  miao() {
    console.log(`${this.name} miao miao miao~~~`);
  }
}
let cat = new Cat("kitty");

cat.miao();

interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  name: "Tom",
  age: 25,
  gender: "male"
};

interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function(
  source: string,
  subString: string
): boolean {
  let result = source.search(subString);
  return result > -1;
};
//可索引类型
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bod", "xdf"];
let myStr: string = myArray[0];

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray1: ReadonlyStringArray = ["Alice", "Bob"];
myArray1[2] = "Mallory"; // error!

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): any;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function(start: number) {};
  counter.interval = 123;
  counter.reset = function() {};
  return counter;
}

class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
  select() {}
}

class Location1 {}

class Point {
  x?: number;
  y!: number;
}
interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 0 };

function buildName(firstName: string = "2b", lastName?: string) {
  return firstName + " " + lastName;
}

let result1 = buildName("Bob"); // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
let result3 = buildName("Bob", "Adams"); // ah, just right

let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
    return function() {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

function loging<T>(arg: T): T {
  return arg;
}

let myLoging: <T>(arg: T) => T = loging;
interface genericIdentityFn<T> {
  (arg: T): T;
}
let myIdentity: genericIdentityFn<number> = loging;

class Grid<T> {
  private name: T;
  static origin = { x: 0, y: 0 };
  constructor(public scale: T) {
    this.name = scale;
  }
}

interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
loggingIdentity(3);
loggingIdentity({ length: 10, value: 3 });

function getProperty<T extends { [index: string]: number }, K extends string>(
  obj: T,
  key: K
) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

interface IFnObj {
  fn(x: number): void;
}
let fn = { fn(x: number): void {}, a: 3 };
let vFnObj: IFnObj = fn;

class CO {
  private name: string = "";
  constructor() {}
}

let co = new CO();

function createInstance<T extends CO>(c: { new (): T }): T {
  return new c();
}

enum Direction {
  Up,
  Down,
  Left,
  Right
}

let xs = [0, 0, 1, null];
let x1 = () => ({ name: "Alice" });
let y1 = () => ({ name: "Alice", location: "Seattle" });

x1 = y1;
y1 = x1;
interface Empty<T> {
  data: T;
}
let x2: Empty<number>;
let y2: Empty<string>;

x2 = y2; // OK, because y matches structure of x

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): number;
}

function getSmallPet(): Fish | Bird {
  // ...
  return 1;
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim(); // errors
