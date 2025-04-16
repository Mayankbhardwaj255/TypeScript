function detectType(val: number | string){
    // return val.toLowerCase();// cannot be used because we dont know.. whether type of val is "string" or "number"
    if(typeof val== "string"){
       return  val.toLowerCase()
    }
    return val+3; // it reaches here.. when it is sure that val is "number" only
}


function provideId(id: string | null){
    if(!id){
        console.log("Please provide id");
        return;

    }
    id.toLowerCase()
}


function printAll(strs: string | string[] | null){
    if(strs){
        if(typeof strs === "object"){
            for(const s of strs){
                console.log(s);
            }

        } else if (typeof strs === "string"){
            console.log(strs);
        }
    }
}

// Narrowing using "IN":-
interface User {
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}


function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
    return false;
}

//NARROWING USING "instanceof" :-
// we can use instance of with anyone which uses "new" keyword (like:- Date, Array, String, etc....)
function logValue(x: Date | string){
    if(x instanceof Date)
{
   console.log(x.toUTCString());
}
   else {
    console.log(x.toUpperCase());
   }
}

//USING type Predicate:-

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish{

   return  (pet as Fish).swim!== undefined
} // it says pet is a fish if it has method of "swim" and which is not undefined.

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "Fish Food"
    }
    else{
        pet
        return "Bird Food"
    }
}


interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}
//The "kind" field is a discriminant — a special field that helps TypeScript know exactly what shape you're dealing with. This technique is called a discriminated union

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    //return shape.side * shape.side
}
//🔴 Problem: This function is unsafe because it does not handle all shape types. TypeScript may complain depending on your strictness settings.


function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width

        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}