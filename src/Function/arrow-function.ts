export {};

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (weight * height);

console.log(bmi(1.69, 55));
