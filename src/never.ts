export {};

// 関数が例外処理を返す場合はnever型を指定する
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
let bar: never = error('only me');
