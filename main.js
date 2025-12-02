// function sayMyName(name){
//     console.log(`My name is ${name}`)
// }

// sayMyName('Akash');
// sayMyName('sajal');

// Implicit binding
// Implicit binding rules are refers to most of the time.

const person = {
    name: 'Akash',
    sayMyName: function(){
        console.log(`My name is ${this.name}`)
    }
}

// leftside of the dot notation refers THIS keyword that focused with the function
person.sayMyName()

// when use explicit binding then we use call() method to call which object.
function sayMyName(){
    console.log(`My name is ${this.name}`)
}

// here individul function does not have any name so it use explicitly binding.
sayMyName.call(person)
// here we see as where we lack name details so we call person object so
// this can identify which object are refferd to the function.

globalThis.name = 'ferari'; // this is default binding
const cars = {
    name: 'BMW',
    sayMyCarName: function(){
        console.log(`My car name is ${this.name}`)
    }
}

function sayMyCar(){
    console.log(`my car name is ${this.name}`)
}

// this is car object where we use New binding.
// what if the name we need something different
// here is when we use new binding

function Cars(name){
    this.name = name
}

// here we make a new Function as Car where name is a agrument under that this.argument = argument

const c1 = new Cars('Toyota')
// here  new keyword then the function car under a new name.
const c2 = new Cars('Hyundai')
// here  new keyword then the function car under a new name.

console.log(c1.name, c2.name)

sayMyCar();