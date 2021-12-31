export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

// ジェネリクス(抽象的な型)
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>('hello'));
console.log(echo<boolean>(true));

// ジェネリクスを使ったクラス
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(100).echo());
console.log(new Mirror<string>('hello TypeScript').echo());
console.log(new Mirror<boolean>(true).echo());
