

function addTwo(num: number){
    //num.toUpperCase(); //error: we should not allowed to do this.
    return num+2;
    //return "hello"; it can also be done but not recommended.
}
addTwo(5); //7


function addTwoo(num: number): number{
    //num.toUpperCase(); //error: we should not allowed to do this.
    return num+2;
    //return "hello"; now it is not allowed. means fun return only number type.
}

function getUpper(val: string){
    return val.toUpperCase();
}
//getUpper(4); //error:should not allowed to do this. 
getUpper("mayank"); //MAYANK



function signUpUser(name: string, email: string, isPaid: boolean){

}

signUpUser("mayank", "mayank@ts.com", false);


let loginUser = (name: string, email: string, isPaid: boolean = false) => { //giving default value to isPaid argument.

}

loginUser("mayank", "mayank@eampl.com", true);



// function getValue(myVal: number){
//     if(myVal > 5){
//         return true;
//     }
//     return "200 ok";
// }// in this there is ambiguity in return type. it can either be boolean or string.


const getHello = (s: string): string =>{
    return "hello";

}


const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string =>{
    return `hero is ${hero}`;
})
// ts automatically infers the type pf hero as a string. so, (hero: string) is optional.

//void:-
function consoleError(errmsg: string): void{

   console.log(errmsg);
   //return 1; //error: void function should not return anything.
}

//never:-the never type represets values which are never observed

function handleError(errmsg: string): never{
    throw new Error(errmsg);
    
}


export{};
