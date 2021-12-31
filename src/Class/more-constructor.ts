export {};

class Person {
  //   public name: string;
  //   protected age: number;

  // constructor関数の引数にアクセス修飾子を書くと自動で初期化してくれる
  constructor(public name: string, protected age: number) {
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person('anago', 26);
console.log(me);
