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

    return displayVar.textContent = item;
    
}



const digitBtns = document.querySelectorAll("button.digit");
console.log(digitBtns);

/* Change display to number pressed on calculator */
digitBtns.forEach(btns => btns.addEventListener("click",()=> changeDisplay(btns.textContent)));





