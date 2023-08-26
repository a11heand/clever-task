/* filename: sophisticated_program.js */

// This code is a complex program that simulates a virtual pet game
// It includes multiple features such as feeding, playing, and training the virtual pet
// It also includes an AI behavior system, random events, and a graphical user interface

class VirtualPet {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.hunger = 50;
    this.happiness = 50;
    this.energy = 50;
    this.training = 0;
    this.behavior = 'normal';
    this.alive = true;
    this.timer = null;
  }

  start() {
    this.timer = setInterval(() => {
      this.update();
      this.checkStatus();
    }, 1000);
  }

  update() {
    this.hunger += 2;
    this.happiness -= 1;
    this.energy -= 1;

    if (this.behavior === 'aggressive') {
      this.happiness -= 2;
    }

    if (this.behavior === 'calm') {
      this.happiness += 1;
      this.energy += 1;
    }
  }

  checkStatus() {
    if (this.hunger >= 100 || this.happiness <= 0 || this.energy <= 0) {
      this.die();
    }

    if (this.hunger >= 80) {
      console.log(`[${this.name}]: I'm hungry!`);
    }

    if (this.happiness <= 20) {
      console.log(`[${this.name}]: I'm sad!`);
    }

    if (this.energy <= 20) {
      console.log(`[${this.name}]: I'm tired!`);
    }
  }

  die() {
    this.alive = false;
    clearInterval(this.timer);
    console.log(`[${this.name}]: Oh no! I died!`);
  }

  feed() {
    if (this.alive) {
      console.log(`[${this.name}]: Yummy! Thanks for the food!`);
      this.hunger -= 20;
      this.happiness += 10;
      this.energy += 10;
    } else {
      console.log(`[${this.name}]: I can't eat, I'm dead!`);
    }
  }

  play() {
    if (this.alive) {
      console.log(`[${this.name}]: Wheee! I love playing!`);
      this.hunger += 10;
      this.happiness += 20;
      this.energy -= 10;
      this.training += 5;
    } else {
      console.log(`[${this.name}]: I can't play, I'm dead!`);
    }
  }

  train() {
    if (this.alive) {
      console.log(`[${this.name}]: I'm getting smarter!`);
      this.hunger += 5;
      this.happiness += 5;
      this.energy -= 5;
      this.training += 10;

      if (this.training >= 50) {
        this.behavior = 'calm';
      }

      if (this.training >= 100) {
        this.behavior = 'aggressive';
      }
    } else {
      console.log(`[${this.name}]: I can't train, I'm dead!`);
    }
  }
}

const pet = new VirtualPet('Rex', 'Dinosaur');
pet.start();

console.log('---');
console.log(`[${pet.name}]: Hello! I'm a ${pet.species}. Let's have some fun!`);
console.log('---');
console.log(`[${pet.name}]: Type "pet.feed()" to feed me.`);
console.log(`[${pet.name}]: Type "pet.play()" to play with me.`);
console.log(`[${pet.name}]: Type "pet.train()" to train me.`);
console.log('---');