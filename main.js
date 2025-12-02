function Person(fName, lName){
    this.firstName = fName
    this.lastName = lName
}

// Person is a contructor function

const person1 = new Person('akash', 'sarker')
const person2 = new Person('sabuj', 'sarker')

person1.getFullName = function () {
    return this.firstName + ' ' + this.lastName
}
// this limits the getFykBane work only for person1 but the real solution is prototype

Person.prototype.getFullName = function (){
    return this.firstName + ' ' + this.lastName
}
// this comes with Person.prototype to the designed function to get all the featured
console.log(person2.getFullName())