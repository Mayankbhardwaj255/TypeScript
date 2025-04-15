 abstract class TakePhoto{
  constructor(
    public cameraMode: string,
    public  filter: string
  ){}

   abstract getSepia(): void // method without definition is abstract method.

   getReelTime(): number {
    //some calculatons
    return 8;
   }
}


class Instagramm extends TakePhoto{
    constructor(
        public camerMode: string,
        public filter: string,
        public burst: number
    ){
        super(camerMode, filter)
    }
    getSepia(): void {
        console.log("Welcome Sepia")
    }
}

const mb = new Instagramm("test", "test" ,5);
mb.getReelTime()

// we cannot instatiates the abstract class directly but can instatiate the class who extends the abstract class.