

let score: number | string = 46; //we can assign either number or string to score.
score = 33;
score = "high "; // it is allowed.
// score = false; //not allowed.


type Users= {
    name: string;
    id: number;
}

type admin = {
    username: string;
    id: number;
}

let mayank: Users |admin = {
    name: "mayank",
    id: 344
}

mayank = {
    username: "mb",
    id: 344
}
 // mayank can be either type that is Users or admin.


//  function getDbId(id: number| string){
//     console.log(`Db Id is: ${id}`);
//  }

//  getDbId(4); //allowed.
//  getDbId("4"); //allowed.

 getDbId(4); //allowed.
 getDbId("4"); //allowed.


function getDbId(id: number| string){
    
    //id.toLowerCase(); //error: id can either be number or string hence we cant use string methods on it... if id is only string then we can do this.
    if (typeof id === "string"){
        id.toLowerCase(); // now allowed as we have verified the type of id.
    }
 }



 //arrays

//  const data: number[] = [1, 2, 3, 4, 5, "6"] // not allowed as it is array of number type only.

 const data1: (string | number |boolean)[] = [1, 2, "3", 4, true];


 //when we want only fixed value:-

 let seatAllotment : "aisle" | "middle" | "window"

 seatAllotment = "aisle";//allowed;
//  seatAllotment = "crew" //not allowed as "seatAllotment can only  be "aisle", "middle", or "window".