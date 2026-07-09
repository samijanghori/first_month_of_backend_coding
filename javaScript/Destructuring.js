// Destructuring means to extract data from object and array

// let's have a comparison between the old way and new way of extracting

// const user = {

//     name: "Ali",
//     age : 21,
//     country : "afghanistan"
// }

// const name = user.name;
// const age = user.age;
// const country = user.country;
// console.log(name);
// console.log(age);
// console.log(country);

// but let's see in ES6
const user2 = {
    name : " Sami",
    age : 22,
    country : "Afghanistan"
}
const {name , age , country} = user2;
console.log(name);
console.log(age);
console.log(counter);
