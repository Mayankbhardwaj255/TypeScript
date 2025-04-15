// console.log("TypeScript is  still here")
// console.log("TypeScript is amazing")

// class User {
//     email: string
//     private name: string

//      readonly city: string ="lucknow" // cannot be accessed outside the class.
//      // city: string ="" // readonly city: string ="lucknow";
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }


//production-grade:-
 class User {

    private course_count=1; //private property.

    readonly city: string ="lucknow"
    constructor(
        public email: string,
        public name: string, //can be private too.
        private userId: string
    ){}
//Private Methods:-

  private deleteToken(){
    console.log("tokens deleted")
  }

 //Getters and Setters
     get getAppleEmail(): string{
          return `apple ${this.email}`

     }

     get courseCount(): number {
        return this.course_count
     }

    //  set courseCount(courseNum): void { 
    // in setter we cannot define the  type of return value.. so we cannpt use any return type.

      set courseCount(courseNum) {
        if(courseNum<=1){
            throw new Error ("count should be more than 1");
        }
        this.courseCount = courseNum
      }

     }
     
     //Inheritance:-
     //subclass cant acquire private members of private class.
     class User2 {

        protected course_count=1; //protected property.
    
        readonly city: string ="lucknow"
        constructor(
            public email: string,
            public name: string, //can be private too.
            private userId: string
        ){}
    //Private Methods:-
    
      private deleteToken(){
        console.log("tokens deleted")
      }
    
     //Getters and Setters
         get getAppleEmail(): string{
              return `apple ${this.email}`
    
         }
    
         get courseCount(): number {
            return this.course_count
         }
    
        //  set courseCount(courseNum): void { 
        // in setter we cannot define the  type of return value.. so we cannpt use any return type.
    
          set courseCount(courseNum) {
            if(courseNum<=1){
                throw new Error ("count should be more than 1");
            }
            this.courseCount = courseNum
          }
    
         }
     class SubUser extends  User2 {
        isFamily: boolean = true
        changeCourseCount(courseCount: number){
            this.course_count = courseCount // when we changed course_count to "protected".. we can access it outside the class and also in subclass.
        }
     }

 


//instatiation:-
const mayank = new User( "m@b.com", "mayank", "1234")
//mayank.city = "lucknow"; cannot be changed.


// mayank.deleteToken;  not accessible outside of the class.


mayank.city // though we can not assign value to city because of readonly but we can access it






// in js:
// we can do ths:- mayank.city = 2; no type safety in js.
// but not in typescript.



