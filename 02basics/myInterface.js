var mayank = { dbId: 47, email: "m@m.com", userId: 1234,
    githubToken: "github", role: "admin",
    startTrail: function () {
        return "Trail started";
    },
    getCoupon: function (name, off) {
        return 25;
    } // we can use "name" instead of "coupon name", but it should be a string or which is defined in the interface.
};
mayank.email = "mayank@2.com";
//mayank.dbId = 56// error: Cannot assign as it is readonly property.
// difference between interface and type alias:-
//1.) interface can be extended but type cannot be. for example:-
// interface User {
//  dbId: number,
//email: string}
//interface User2 extends User{
// userId: number,
// googleId: string
// }
// let mayank: User2 = { dbId: 47, email: "m@m.com", userId: 1234, googleId: "google@1.com"}
