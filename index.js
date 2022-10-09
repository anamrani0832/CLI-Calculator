"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var frstNum = (0, readline_sync_1.question)("Enter  First Number:\n");
    var operator = (0, readline_sync_1.question)("Enter operator\n");
    var scondNum = (0, readline_sync_1.question)("Enter  second Number:\n");
    console.log(frstNum, operator, scondNum);
    var validInput = isNum(frstNum) && isOpe(operator) && isNum(scondNum);
    if (validInput) {
        var firstNum = parseInt(frstNum);
        var secondNum = parseInt(scondNum);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log("Invalid Inputs");
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
function isOpe(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNum(str) {
    var mybeNum = parseInt(str);
    var isNum = !isNaN(mybeNum);
    return isNum;
}
main();
