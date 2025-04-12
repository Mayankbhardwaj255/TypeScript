const User = {
    name: "mayank",
    email: "mayank@ts.com",
    isActive: true,
}
// function createUser({name: string, isPaid: boolean}){

// }

// let newUser = {name: "mayank", isPaid: false, email: "m@b.com"};// this way we can additional field in object.

// createUser(newUser);

// createUser({name: "mayank", isPaid: false}) // if we add additional field here like email: "m@b.com", it will give error.. because it is not defined in function parameter.



                          //return type(object)
function createCourse():{name: string, price: number} {
    return {name: "reactjs", price: 499};
}
 createCourse(); 



type User = {
    name: string;
    email: string;
    isActive: boolean;
}
type MyString = string; //this is how we can create type alias.. i.e. we can use MyString instead of string in our code.
function createUser(user: User): User{
    return {name: "", email: "", isActive: true};
  
}
createUser({name: "", email: "", isActive: true});
 

type Point ={
    x: number;
    y: number;
};

function printCoord(pt: Point){
    console.log(pt.x);
    console.log(pt.y);

}

printCoord({x:90, y:90});

type Users ={
    readonly _id: string  // cannot be changed.
   name: string;
   email: string;
   isActive: boolean;
   creditcardDetails?: number
}

let myUser: Users = {
    _id: "1234",
    name: "mayank", 
    email: "m@b.com",
    isActive: false,

}


type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
} // fcardDetails is combination of cardNumber and cardDate and cvv.



myUser.email = "mayank@ex.com"
//myUser._id = "aa";  cant be done because of "readonly"...


export {};