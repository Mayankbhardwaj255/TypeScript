//when we want data in specific order... so we cat use union here.

// const user: (string| number)[] = ["mb", 1]
let  tuser: [string, number, boolean] 
tuser = ["mb", 122, true] //there is specific order..


let rgb: [number, number, number] = [255, 123, 112];


// let rgb: [number, number, number] = [255, 123, 112, "red"];// not allowed as we have defined only 3 values in tuples.


type TUser = [number, string]
 
let newUser: TUser = [1, "mayank"]

newUser[1] = "mayank@example.com"
//values can be changed but not the order of values.
//newUser[0] = "mayank" //not allowed as it is number type.

//since tuples at the end are arrays, so we can use methods of array on them.

 //newUser.push(true) //allowed as these are the methods of array amd tuples are array.


export {};