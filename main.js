function outer(){
    let counter  = 0;
    console.log("outer")
    return function inner(){
        counter++;
        console.log(counter);
    }
}

const fn = outer();

fn();