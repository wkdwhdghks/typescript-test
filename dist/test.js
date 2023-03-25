"use strict";
function fc(a) {
    var result = [];
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var i = a_1[_i];
        result.push(Number(i));
    }
    console.log(result);
    return result;
}
fc(["1", 2, "3"]);
