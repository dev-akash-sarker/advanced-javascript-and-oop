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

function Person (fName , lName){
    this.firstName = fName;
    this.lastName = lName;
}

Person.prototype.getFullName = function(){
    return `my name is ${this.firstName} ${this.lastName}`
}

function Cricketer(fName, lName, age){
    Person.call(this, fName, lName);
    this.age = age;
}
Cricketer.prototype = Object.create(Person.prototype)
Cricketer.prototype.constructor = Cricketer;
Cricketer.prototype.getInfo = function(){
  return `${this.firstName} ${this.lastName} is ${this.age} years old`
}



const person1 = new Person('sakib', 'all hasan');
const cricketer1 = new Cricketer('sakib al', 'hasan', 24)

console.dir(cricketer1.getInfo())
