export {};

let profile1: object = { name: 'Ham' };
profile1 = { birthyear: 1995 };

let profile2: {
  name: string;
} = { name: 'Ham' };
profile2 = { name: 'Nimo' };

// オブジェクトの構造がわかっている場合は厳密に定義しよう使用
