export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// 既存のプロパティにオプショナルなプロパティを追加できる
type PartialType = Partial<Profile>;
type RequiredType = Required<Profile>;
