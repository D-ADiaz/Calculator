function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    let answer = num1/num2;
    answer = num2 === 0 ? "ERROR": answer;
    return answer;
}