// before Arrow function
function sayHello()
{
    console.log("hello world!");
}

sayHello();





// use new way of functions -> arrow function

const sayHello2 = () => {
    console.log("hello from arrow function")
}

sayHello2();





// let's define with parameters
const sayHello3 = (name) =>{
    console.log('Hello ' + name);
}
sayHello3("sami");