
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    console.log(`${this.name} has ${this.legCount} legs`)
  }
}


let dog = new Animal("Robert", "2")

dog.describe()