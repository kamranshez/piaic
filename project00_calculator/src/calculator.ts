function Calculator(num1: number, num2: number, operator: string): number {
    let strResult: string = "", result: number =0 ;
    switch (operator) {
      case "+":
        result = num1 + num2;
        strResult = `${num1} + ${num2} = ${result}`;
        break;
  
      case "-":
        result = num1 - num2;
        strResult = `${num1} - ${num2} = ${result}`;
        break;
  
      case "x":
        result = num1 * num2;
        strResult = `${num1} x ${num2} = ${result}`;
        break;
  
      case "/":
        result = num1 / num2;
        strResult = `${num1} / ${num2} = ${result}`;
        break;
  
    }
  
    return result;
  }
  
  export { Calculator };