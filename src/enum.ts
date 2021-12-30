export {};

// 列挙型enum（自動的に連番を用意したいときに便利）
enum Months {
  January = 1,
  Febrary,
  March,
  April,
  May,
  June,
  July,
  Aaugust,
  September,
  October,
  November,
  December,
}

Months.January;
Months.Febrary;

// console.log(Months.Febrary);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080',
}

COLORS.GRAY;
