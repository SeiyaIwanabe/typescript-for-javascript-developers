export {};

class Person {
  // アクセス修飾子
  public name: string;
  protected age: number; // インスタンス側では参照できない
  protected nationarity: string;

  // constructorはreturnしないので型アノテーションはしなくていい
  constructor(name: string, age: number, nationarity: string) {
    this.name = name;
    this.age = age;
    this.nationarity = nationarity;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Andoroid extends Person {
  constructor(name: string, age: number, nationarity: string) {
    super(name, age, nationarity);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationarity: ${this.nationarity}`;
  }
}

let taro = new Person('Taro', 30, 'America');
console.log(taro.name);
// console.log(taro.age);
console.log(taro.profile());

let hana = new Andoroid('Hana', 25, 'America');
console.log(hana.profile());
