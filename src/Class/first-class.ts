export {};

class Person {
  // 型アノテーションする
  name: string;
  age: number;

  // constructorはreturnしないので型アノテーションはしなくていい
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('Taro', 30);
console.log(taro.profile());
