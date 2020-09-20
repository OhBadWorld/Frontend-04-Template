class Life {
  constructor(name, life) {
    this.name = name;
    this.life = life;
  }
}
class Dog extends Life{
  constructor(name) {
    super(name);
  }
  attack(somebody) {
    console.log(`${this.name} 暴打 ${this.somebody}`);
  }
}

class Person extends Life {
  constructor(name) {
    super(name);
  }
}

let person = new Person('常威');
let dog = new Dog('来福');
dog.attack(person);