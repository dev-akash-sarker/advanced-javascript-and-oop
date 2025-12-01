

let a = 10; // global scope
{ 
    let b = 10;
} // this is block scope

function allin (){
    let x = 20
} // this is function scope
function allinout (){
    let x = 20
} // this is function scope

function outer () {
    let b = 20;
    function inner () {
        let c = 30;
        console.log(a, b , c)
    }
    inner()
}
outer() // outer nested with inner so this is nested function scope
