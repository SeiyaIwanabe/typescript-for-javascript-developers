export {};

// 型の互換性
let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;
console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';
fooString = barString;

let foostringLiteral: 'foostringLiteral' = 'foostringLiteral';
fooString = foostringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1955 = 1955;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(26, 'anago');
console.log(me);
