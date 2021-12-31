export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'anago',
  age: 26,
};

me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;
const friend: PersonalDataType = {
  name: 'eiji',
  age: 40,
};

// friend.age++;

type Yomitorisenyo<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitorisenyoProfile = Yomitorisenyo<Profile>;
