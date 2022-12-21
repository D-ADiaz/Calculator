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

function operate(operator,num1,num2){

switch(operator)
    {
        case "+":
            return add(num1,num2);

        case "-":
            return subtract(num1,num2);

        case "*":
            return multiply(num1,num2);
            
        case "/":
            return divide(num1,num2);
    }
}





function changeDisplay(item){
    const displayVar = document.getElementById("display");


    return displayVar.textContent += item;
    
}
function clearDisplay(){

    /*const displayVar= document.getElementById("display"); */
    currentCount = 0;

    return displayVar.textContent = " ";

}

function storeValues(){





}


let currentValue =0;
const displayVar= document.getElementById("display");
const digitBtns = document.querySelectorAll("button.digit");
const clearBtn = document.getElementById("clear");
const operatorBtns = document.querySelectorAll("button.operator");
console.log(digitBtns);

/* Change display to digit pressed on calculator */
displayVar.textContent = digitBtns.forEach(btns => btns.addEventListener("click",()=> changeDisplay(btns.textContent)));

operatorBtns.forEach(oBtns => oBtns.addEventListener("click"),() => storeValues());

clearBtn.addEventListener("click",()=> clearDisplay());

