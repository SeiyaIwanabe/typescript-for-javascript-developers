export {};

// 抽象メソッドは必ずオーバーライドしないといけない
abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrrr';
  }
}
