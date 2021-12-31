export {};

// シグネチャー（引数とreturnの型をそれぞれ宣言してあげる） 門番
function double(value: number): number;
function double(value: string): string;

// 実態の関数には型成約をする必要がない(anyを使用してもよい)
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('pom'));
// console.log(double(true));
