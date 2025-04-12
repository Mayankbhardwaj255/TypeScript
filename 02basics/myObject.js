"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "mayank",
    email: "mayank@ts.com",
    isActive: true,
};
// function createUser({name: string, isPaid: boolean}){
// }
// let newUser = {name: "mayank", isPaid: false, email: "m@b.com"};// this way we can additional field in object.
// createUser(newUser);
// createUser({name: "mayank", isPaid: false}) // if we add additional field here like email: "m@b.com", it will give error.. because it is not defined in function parameter.
//return type(object)
function createCourse() {
    return { name: "reactjs", price: 499 };
}
createCourse();
function createUser(user) {
    return { name: "", email: "", isActive: true };
}
createUser({ name: "", email: "", isActive: true });
function printCoord(pt) {
    console.log(pt.x);
    console.log(pt.y);
}
printCoord({ x: 90, y: 90 });
var myUser = {
    _id: "1234",
    name: "mayank",
    email: "m@b.com",
    isActive: false,
};
myUser.email = "mayank@ex.com";
