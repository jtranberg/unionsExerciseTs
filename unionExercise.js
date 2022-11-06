var highScore;
highScore = 1;
highScore = false;
var stuff = [];
var colors = [];
var greet = function (person) {
    if (typeof person === "string") {
        console.log("hello, ".concat(person));
    }
    else {
        for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
            var p = person_1[_i];
            console.log("Hello, ".concat(p));
        }
    }
};
