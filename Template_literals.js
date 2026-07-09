// before ES6 we were coding like this 
let name = " sami";
console.log('Hello' + name);


// but after ES6 we have something called Template Literals for combining the strings 


let name2 = " sami ";
console.log(`hello ${name2}`);



// also for more than one string can write like this : 
let name3 = " sami ";
let name4 = " asad ";
console.log(`hello ${name3} ${name4}`);

 

// even we can do mathmatical operations inside them
console.log(`the sume of 1 + 2 =  ${1+2}`);




// or we use it when we want to call a function like this : 
const text = (name) =>{ return name;}
console.log(`let's use function text ${text(sami)}`)