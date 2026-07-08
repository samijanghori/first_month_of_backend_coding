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




// and one we have only one code and want to use return no need for writting see the example : 
const addNumbers = (num1 , num2) => num+num2;
addNumbers(2,3);