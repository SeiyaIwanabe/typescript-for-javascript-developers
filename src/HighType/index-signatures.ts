export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

// How to write index signatures
// { [ index: typeforIndex ]: typeforValue }

let profile: Profile = { name: 'anago', underTwenty: false };

profile.name = 'anago';
profile.age = 26;
profile.nationarity = 'Japan';
