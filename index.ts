import { question } from "readline-sync";
type Operator = "+" | "-" | "*" | "/";
function main(): void {
  const frstNum: string = question("Enter  First Number:\n");
  const operator: string = question("Enter operator\n");
  const scondNum: string = question("Enter  second Number:\n");
  console.log(frstNum, operator, scondNum);
  const validInput: boolean =
    isNum(frstNum) && isOpe(operator) && isNum(scondNum);
  if (validInput) {
    const firstNum: number = parseInt(frstNum);
    const secondNum: number = parseInt(scondNum);
    const result = calculate(firstNum, operator as Operator, secondNum);
    console.log(result);
  } else {
    console.log("Invalid Inputs");
    main();
  }
}
function calculate(firstNum: number, operator: Operator, secondNum: number) {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
  }
}
function isOpe(operator: string): boolean {
  switch (operator) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
}
function isNum(str: string): boolean {
  const mybeNum = parseInt(str);
  const isNum: boolean = !isNaN(mybeNum);
  return isNum;
}
main();
