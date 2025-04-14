//to restrict the choices..
// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2
//const
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 22] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 33] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 34] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
// put const before enum to produce less code for javascript.
var mbSeat = SeatChoice.AISLE;
