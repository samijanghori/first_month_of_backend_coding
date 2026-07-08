// ============================================
// BEFORE ES6 (ES5 and older)
// ============================================

// VAR - Function scoped, can be redeclared
var name = "Ali";
var name = "mahmod";  // ✅ Redeclaration allowed with var
console.log(name);    // Output: mahmod

// PROBLEM: var can be redeclared accidentally
// This can cause bugs in large applications


// ============================================
// LET - Block scoped, cannot be redeclared
// ============================================

let age = 12;
// let age = 14;  // ❌ ERROR: Identifier 'age' has already been declared
// Uncomment the line above to see the error

// ✅ But we CAN reassign (change the value)
age = 15;
console.log(age);  // Output: 15

// Use let when the value will change


// ============================================
// CONST - Cannot be reassigned at all
// ============================================

const PI = 3.14;
// PI = 3.15;  // ❌ ERROR: Assignment to constant variable
// Uncomment to see the error

// ✅ BUT with objects and arrays, we CAN change properties
const user = {
    name: "sami"  // Note: use : not =
};

user.name = "mahmood";  // ✅ Allowed - changing property
console.log(user.name);  // Output: mahmood

// ❌ But we CANNOT reassign the whole object
// user = { name: "ali" };  // ERROR!


// ============================================
// BLOCK SCOPING: var vs let
// ============================================

// VAR is function-scoped, NOT block-scoped
if (true) {
    var x = 10;  // var ignores block scope
}
console.log(x);  // Output: 10 (accessible outside the block!)

// LET is block-scoped
if (true) {
    let y = 20;  // let is ONLY accessible inside this block
}
// console.log(y);  // ❌ ERROR: y is not defined

// This is why let and const are preferred!


// ============================================
// RECOMMENDATIONS FOR YOUR BACKEND JOURNEY
// ============================================

// ✅ Use const by default
const API_URL = "https://api.example.com";
const MAX_RETRIES = 3;

// ✅ Use let when you need to reassign
let counter = 0;
counter++;

// ❌ Avoid var completely in modern JavaScript
// (Only use var if you're supporting very old browsers)


