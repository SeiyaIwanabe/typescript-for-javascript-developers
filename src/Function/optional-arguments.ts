export {};

let bmi: (
  height: number,
  weight: number,
  printable?: boolean | undefined
) => number = (height: number, weight: number, printable?: boolean): number => {
  const bmi: number = weight / (weight * height);
  if (printable === true) {
    console.log({ bmi });
  } else {
    console.log('秘密♥');
  }
  return bmi;
};

bmi(1.69, 55);

// bmi(身長, 体重, console.logで出力するかどうか?)
// bmi(1.69, 55, true)
// bmi(1.69, 55, false)
// bmi(1.69, 55)
