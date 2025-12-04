// here we must have stable version of nodejs
// also the vscode for the code

// - Closures
// - Curriying
// - this keyword
// - Prototype
// - Prototype inheritance
// - Class
// - Iterables and iterators
// - Generators

// function Person(fName, lName){
//     this.firstName = fName
//     this.lastName = lName
// }

// const person1 = new Person('akash', 'sarker');

// Person.prototype.getFullName = function (){
//     return `${this.firstName} ${this.lastName}`
// }

// function SuperHero(fName, lName){
//     Person.call(this, fName, lName)
//     this.isSuperHero = true
// }

// SuperHero.prototype.fightCrime = function (){
//     console.log("fight crime")
// }

// SuperHero.prototype = Object.create(Person.prototype)

// const batman = new SuperHero('akash', 'sarler')
// console.log(batman.getFullName())

class Animal {
    constructor(animal){
        this.animal = animal
    }

    sayMyAnimal(){
        return `my ${this.animal} is so good to me`
    }
}



class Mammal extends Animal {
    constructor(animal){
        super(animal);
    }
    sayMyNewAnimal(){
        return `${this.animal} is greate`
    }
}

const dogs = new Animal('Dog')
const cats = new Mammal('Cat')
console.log(dogs.sayMyAnimal())
console.log(cats.sayMyNewAnimal())