"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some calculatons
        return 8;
    }
}
class Instagramm extends TakePhoto {
    constructor(camerMode, filter, burst) {
        super(camerMode, filter);
        this.camerMode = camerMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Welcome Sepia");
    }
}
const mb = new Instagramm("test", "test", 5);
mb.getReelTime();
// we cannot instatiates the abstract class directly but can instatiate the class who extends the abstract class.
