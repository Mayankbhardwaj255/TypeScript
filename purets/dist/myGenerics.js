"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
//identityThree("mayank")
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({})
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
} // if we are taking input array of type "T",  the return value must be one of the values from T[]
// arrow function:-
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
}; // using "," after T indicates that it is not normal html tag.. it is generic tag.
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
// // Any object you pass as valTwo must have the following properties:
// connection: string
// username: string
// password: string
const db = {
    connection: "localhost:5432",
    username: "admin",
    password: "secret123"
};
// So if you try to call the function like this:
// const result = anotherFunction<string, typeof db>("MyVal", db);
// console.log(result);
// ✅ It works! Because db satisfies the Database interface.
//SUMMARY:-
// 1) T can be anything (string, number, object, etc.)
// 2)  U must extend the Database interface (i.e. must include connection, username, and password)
// 3) The function simply returns both values in an object, nicely bundled.
anotherFunction(3, {
    connection: "mongodb_uri",
    username: "mayank",
    password: "0909"
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
// INSTATIATING THE CLASS:-
const quizStore = new Sellable();
quizStore.addToCart({ name: "JS Basics", type: "MCQ" });
const courseStore = new Sellable();
courseStore.addToCart({ name: "TypeScript 101", author: "John", subject: "Web Dev" });
//  1) quizStore only accepts objects shaped like Quiz.
// 2) courseStore only accepts objects shaped like Course.
//So if you try to do this:
// courseStore.addToCart({ name: "Oops", author: "Someone" }); // ❌ missing 'subject'
