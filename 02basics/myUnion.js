var score = 46; //we can assign either number or string to score.
score = 33;
score = "high "; // it is allowed.
var mayank = {
    name: "mayank",
    id: 344
};
mayank = {
    username: "mb",
    id: 344
};
// mayank can be either type that is Users or admin.
//  function getDbId(id: number| string){
//     console.log(`Db Id is: ${id}`);
//  }
//  getDbId(4); //allowed.
//  getDbId("4"); //allowed.
getDbId(4); //allowed.
getDbId("4"); //allowed.
function getDbId(id) {
    //id.toLowerCase(); //error: id can either be number or string hence we cant use string methods on it... if id is only string then we can do this.
    if (typeof id === "string") {
        id.toLowerCase(); // now allowed as we have verified the type of id.
    }
}
//arrays
//  const data: number[] = [1, 2, 3, 4, 5, "6"] // not allowed as it is array of number type only.
var data1 = [1, 2, "3", 4, true];
//when we want only fixed value:-
var seatAllotment;
seatAllotment = "aisle"; //allowed;
//  seatAllotment = "crew" //not allowed as "seatAllotment can only  be "aisle", "middle", or "window".
