// const superHeros = [] //type is "never";

// superHeros.push("spiderman"); //string is not assignable to parameter type "never"

const superHeros: string[] = [] // it means the superHeros is array of string type. 

superHeros.push("spiderman");
superHeros.push("Ironman");

const heroPower: number[] = [] // it means the heroPower is array of number type.
heroPower.push(2);


//another method of declaratrion:-
const hero: Array<number> = []
hero.push(1);

type User ={
    name: string;
    isActive: boolean;
}

const allUsers: User[] = []
allUsers.push({name: "mayank", isActive: false});

const MLModels: number[][] = [ //array of arrays of numbers.
    [255,255,255],
    [1, 1, 1]
]
