 const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number):boolean|number {
    return val
}

function identityTwo(val: any): any{
    return val;
}
  

function identityThree<Type>(val: Type): Type{
    return val;
}

identityThree(3)
//identityThree("mayank")

function identityFour<T>(val: T): T{
    return val;
}

interface Bottle{
    brand: string,
    type: number
}

// identityFour<Bottle>({})


function getSearchProducts<T>(products: T[]): T{
    // do some database operations
    const myIndex = 3
    return products[myIndex]
} // if we are taking input array of type "T",  the return value must be one of the values from T[]

// arrow function:-

const getMoreSearchProducts = <T, >(products: T[]): T =>{
    // do some database operations
    const myIndex = 4;
    return products[myIndex]
} // using "," after T indicates that it is not normal html tag.. it is generic tag.

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object{
    return {
        valOne,
        valTwo
    }
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
})



// function anotherFunction<T, U extends number >(valOne:T, valTwo: U): object{
//      return {
//         valOne,
//         valTwo
//      }
// }

// anotherFunction(3, "4") // not allowed. as U extends number so it cannot be string.
 //anotherFunction(3, 4.5)//allowed



 interface Quiz{
    name: string,
    type: string
 }

 interface Course {
    name: string, 
    author: string,
    subject: string
 }

 class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
 }
 // INSTATIATING THE CLASS:-
 const quizStore = new Sellable<Quiz>();
 quizStore.addToCart({ name: "JS Basics", type: "MCQ" });
 
 const courseStore = new Sellable<Course>();
 courseStore.addToCart({ name: "TypeScript 101", author: "John", subject: "Web Dev" });
 

//  1) quizStore only accepts objects shaped like Quiz.

// 2) courseStore only accepts objects shaped like Course.

//So if you try to do this:

// courseStore.addToCart({ name: "Oops", author: "Someone" }); // ❌ missing 'subject'

