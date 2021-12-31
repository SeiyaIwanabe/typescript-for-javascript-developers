export {};

// コンストアサーション
let name = 'anago';
name = 'aaa';

let nickName = 'Anago' as const;
nickName = 'Anago';

// as constを書くとすべてのプロパティがreadonlyになる
let profile = {
  name: 'Gonta',
  height: 190,
} as const;

// profile.name = 'anago';
// profile.height = 200;
