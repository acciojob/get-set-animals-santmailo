//complete this code
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    return "The animal makes a sound";
  }
}

class Dog extends Animal {
  makeSound() {
    return "Woof";
  }

  bark() {
    console.log("woof");
  }
}

class Cat extends Animal {
  makeSound() {
    return "Meow";
  }

  purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
