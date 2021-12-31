export {};

// 静的メンバ
class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'iwanabe';
  static lastName: string = 'seiya';

  static work() {
    return `Hey, guys. This is ${this.lastName} Are you intersted in TypeScript?`;
  }
}

let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
