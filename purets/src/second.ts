interface TakePhotos{
    cameraMode: string
    filter: string
    burst: number
    //getHii(): string
    
}
//class implementing the interface must include all the properties defined in the interface.. and can even more

interface story {
createStory(): void
}

class Instagram implements TakePhotos{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
    // getHii(): string {
    //     return "hii"
    // }
}


class Youtube implements TakePhotos, story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    createStory(): void {
        console.log("story is created")
    }
}