//SYNTAX:-
//let VariableName: type = value;


let greetings: string = 'hello';

//greetings = 6;// error: Type 'number' is not assignable to type 'string'.
greetings.toUpperCase(); //HELLO
console.log(greetings); //hello


// let myNum = 6;
// myNum.toUpperCase(); // error: property 'toUpperCase' doesnt exists on type 'number;



//number:-
let userId: number = 334455 

userId.toFixed();
userId.toExponential(2); //3.34e+5
userId.toString(); //334455
userId.toPrecision(2); //3.3e+5
//userId = "mayank" //error:

//boolean:-

let isLoggedIn: boolean = false;
isLoggedIn.valueOf(); //false;


//any:-

let hero; //ts inferred it as "any" type.

// any type can be anything. it is not recommended to use it.
// any basically not a type but it is a way to apt out the type checking.

function getHero(){
    return "thor";
}

hero = getHero();


export {}; //removing errors temporarily.
