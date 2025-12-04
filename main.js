

// Person is a contructor function

// const person1 = new Person('sajal', 'sarker')
// const person2 = new Person('sabuj', 'sarker')

// function Person(fName, lName){
//     this.firstName = fName
//     this.lastName = lName
// }

// Person.prototype.getFullName = function (){
//     return this.firstName + ' ' + this.lastName
// }

// function SuperHero(fName, lName){
//     Person.call(this, fName, lName)
//     this.isSuperHero = true;
// }

// SuperHero.prototype.fightCrime = function (){
//     console.log('fighting crime')
// }

// SuperHero.prototype = Object.create(Person.prototype)
// const batman = new SuperHero('bruce', 'wayne');
// SuperHero.prototype.constructor = SuperHero

// console.log(batman.getFullName())

// lets learn class with prototupe inheritence

// function Person(fName, lName){
//     this.firstName = fName
//     this.lastName = lName
// }

// Person.prototype.getFullName = function (){
//     return this.firstName + ' ' + this.lastName
// }

class Person {
    constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    }

    getFullName(){
        return this.firstName + ' ' + this.lastName
    }
}

// create instance
const classP1 = new Person('Sakib', 'Hasan');
console.log(classP1.getFullName())

class SuperHero extends Person {
    constructor(fName, lName){
        super(fName, lName)
        this.isSuperHero = true
    }

    fightCrime(){
        console.log('fighting crime')
    }
}

const batman = new SuperHero('Bruxe', 'wyan');
console.log(batman.getFullName())
console.log(batman.fightCrime())

class Fruit {
    constructor(fruitName) {
        this.fruitName = fruitName
    }

    myFavorate(){
        console.log('i love mango')
    }
}

const nationalFruit = new Fruit('Mango')
console.log(nationalFruit.myFavorate())

class Movement extends Fruit {
    constructor(fruitName){
        super(fruitName)
        this.isMovement = true
    }

    getMovement(){
        return `${this.fruitName} is my favorate and i eat and walk`
    }
}
// create instance
const movement1 = new Movement('Apple')

console.log(movement1.myFavorate())