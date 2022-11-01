function receivesAFunction(spy){
    spy();
}

let name = "Rose"

function returnsANamedFunction(sayHi){
   return function sayHi(name){ 
        console.log(`Hello, ${name}`)
    }
}

const returnsAnAnonymousFunction= () => {
    return () => {
    }
}