class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === 'male') {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  // Example usages:
  const fluffy = new Cat("Fluffy", "female");
  console.log(fluffy.speak()); // "Fluffy says meow!"
  
  const fido = new Dog("Fido", "male");
  console.log(fido.speak()); // "Fido says woof!"
  
  const polly = new Bird("Polly", "male");
  console.log(polly.speak()); // "It's me! Polly, the parrot!"
  
  const tweety = new Bird("Tweety", "female");
  console.log(tweety.speak()); // "Tweety says squawk!"
  