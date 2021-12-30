export {};

// 型安全のためのunknown型
const kansu = (): number => 43;
let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}

// typeofを使いながら型を確認して聞くことを型ガードという
// 一旦型を指定したいときはanyではなくunknown型とtypeofを使っていく
