export {};

// 名前空間
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace Engish {
  export class Person {
    constructor(public firstName: string, public lastName: string) {}
  }
}

const me = new Japanese.Tokyo.Person('anago');
const meOsaka = new Japanese.Osaka.Person('seiyan');
console.log(me.name);
console.log(meOsaka.name);

const michael = new Engish.Person('Michael', 'Jackson');
console.log(michael);
