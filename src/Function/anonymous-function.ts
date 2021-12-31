export {};

let bmi: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (weight * height);
};

console.log(bmi(1.69, 55));
