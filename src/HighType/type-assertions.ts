export {};

// 型アサーション
let name: any = 'anago';
// let length = (<string>name).length;
// 推奨の書き方
let length = (name as string).length;

// length = 'foo';
