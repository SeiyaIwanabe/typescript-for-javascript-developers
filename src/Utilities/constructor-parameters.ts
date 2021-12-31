export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('Taro', 20);
console.log(taro);

type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['anago', 26];
const ham = new Person(...profile);
console.log(ham);
