

// Person is a contructor function

const person1 = new Person('sajal', 'sarker')
const person2 = new Person('sabuj', 'sarker')

function Person(fName, lName){
    this.firstName = fName
    this.lastName = lName
}

Person.prototype.getFullName = function (){
    return this.firstName + ' ' + this.lastName
}

function SuperHero(fName, lName){
    Person.call(this, fName, lName)
    this.isSuperHero = true;
}

SuperHero.prototype.fightCrime = function (){
    console.log('fighting crime')
}

SuperHero.prototype = Object.create(Person.prototype)
const batman = new SuperHero('bruce', 'wayne');
SuperHero.prototype.constructor = SuperHero

console.log(batman.getFullName())
