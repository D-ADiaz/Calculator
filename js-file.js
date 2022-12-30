function add(num1,num2){
    clearDisplay()
    return num1+num2;
}

function subtract(num1,num2){
    clearDisplay()
    return num1-num2;
}

function multiply(num1,num2){
    clearDisplay()
    return num1*num2;
}

function divide(num1,num2){
    clearDisplay()
    let answer = num1/num2;
    answer = num2 === 0 ? "ERROR": answer;
    return answer;
}

function operate(operator,num1,num2){
    console.log("operator function called");
    console.log(operator);
    console.log(num1);
    console.log(num2);
num1 *=1;
num2 *=1;
switch(operator)
    {
        case "+":
            console.log("addition called");
            return add(num1,num2);

        case "-":
            return subtract(num1,num2);

        case "*":
            return multiply(num1,num2);
            
        case "/":
            return divide(num1,num2);
    }
}

function updateCurrentValue(num){

    return currentValue = displayVar.textContent+num;

}

function updateLastValue(){

    lastValue = displayVar.textContent;
}

function updateLastOperator(operator){
    return lastOperator = operator;

}

function changeDisplay(item=0){

    updateCurrentValue(item);
    console.log( "updated current value as: " + currentValue);
    console.log( "last value was: "+ lastValue);
    return displayVar.textContent += item;
    
}

function clearDisplay(){

    return displayVar.textContent = "";

}

function storeValues(operator){
    
    updateLastValue();
    updateLastOperator(operator);

    console.log(lastValue)
    return lastValue;

}

/*variables*/
let lastOperator = -1;
let currentValue =0;
let lastValue = 0;

const displayVar= document.getElementById("display");
const digitBtns = document.querySelectorAll("button.digit");
const clearBtn = document.getElementById("clear");
const operatorBtns = document.querySelectorAll("button.operator");
const equalBtn = document.getElementById("equals");



/* Change display to digit pressed on calculator */
displayVar.textContent = digitBtns.forEach(btns => btns.addEventListener("click",() => changeDisplay(btns.textContent)));

operatorBtns.forEach(operatorBtns => operatorBtns.addEventListener("click",() => storeValues(operatorBtns.textContent)));
operatorBtns.forEach(operatorBtns => operatorBtns.addEventListener("click",() => clearDisplay()));

equalBtn.addEventListener("click", () => changeDisplay(operate(lastOperator,lastValue,currentValue)));
clearBtn.addEventListener("click",()=> clearDisplay());