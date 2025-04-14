//to restrict the choices..

// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2

//const
enum SeatChoice{
    AISLE = 10, //by default it is 0 and can have value of any other type
    MIDDLE = 22,// by default it is 1.
    WINDOW = 33, // by default it is 2.
    FOURTH
}
 // put const before enum to produce less code for javascript.
const mbSeat = SeatChoice.AISLE
