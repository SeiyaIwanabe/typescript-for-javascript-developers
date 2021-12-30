export {};

let numbers: number[] = [1, 12, 3];

// 非推奨な書き方
let numbers2: Array<number> = [2, 3, 4];
let strings: Array<string> = ['a', 'b'];

let strings2: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

// 二次元配列
let nijigenHairetu: number[][] = [
  [50, 100],
  [150, 300],
];

// 共用型(ユニオン型)
let hairetu: (string | number | boolean)[] = [1, false, 'Japan'];
