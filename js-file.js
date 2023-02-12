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

    /*convert to int*/
num1 *=1;
num2 *=1;

switch(operator)
    {
        case "+":
            console.log("addition called, adding "+ num1 + " + "+ num2 );
            return add(num1,num2);

        case "-":
            console.log("subtraction called, subtracting "+ num1 + " - "+ num2 );

            return subtract(num1,num2);

        case "*":
            console.log("multiply called, multiplying "+ num1 + " * "+ num2 );

            return multiply(num1,num2);
            
        case "/":
            console.log("division called, dividing "+ num1 + " / "+ num2 );

            return divide(num1,num2);
    }
}

function updateCurrentValue(num){

    console.log("updated current item as: " + displayVar.textContent+num);
    return currentValue = displayVar.textContent+num;

}

function updateLastValue(){
    console.log("last value updated as " + displayVar.textContent);
    lastValue = displayVar.textContent;
}

function updateLastOperator(operator){

    lastOperator = operator;
    console.log("last operator: " + lastOperator);
    return lastOperator;

}

function changeDisplay(item=0){
    console.log("called Changedisplay");
    updateCurrentValue(item);

    return displayVar.textContent += item;
    
}

function clearDisplay(){
    console.log("cleardisplay called");
    return displayVar.textContent = "";

}

function checkForOperation(){

    if (lastOperator ===-1 ){
        console.log("continue");
    }
    else{
        console.log("else statement reached");
        changeDisplay(operate(lastOperator,lastValue,currentValue));
    }

}

function resetCalculator(){
    lastOperator = -1;
    currentValue = 0;
    lastValue = 0;


}

function storeValues(operator){
    
    
    checkForOperation();
    updateLastValue();
    updateLastOperator(operator);
    
    clearDisplay();
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
/*operatorBtns.forEach(operatorBtns => operatorBtns.addEventListener("click",() => clearDisplay()));*/

equalBtn.addEventListener("click", () => changeDisplay(operate(lastOperator,lastValue,currentValue)));
clearBtn.addEventListener("click",()=> resetCalculator());