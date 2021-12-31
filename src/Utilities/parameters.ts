export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('anago', 26);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Gloria', 87];
debugProfile(...profile);
