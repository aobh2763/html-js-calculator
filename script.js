var operand1 = undefined;
var operand2 = undefined;
var currOperator = undefined;

function addNumber(n) {
    const disp = document.getElementById('display');

    if (disp.innerHTML.length >= 10) {
        disp.innerHTML = "OVF Err.";
        return;
    }

    if ((disp.innerHTML == "0") || (disp.innerHTML == "OVF Err.") || (disp.innerHTML == "DIV/0 Err.") || (disp.innerHTML == "OPR Err.")) {
        disp.innerHTML = n;
    } else {
        disp.innerHTML += n;
    }
}

function clearDisplay() {
    const disp = document.getElementById('display');

    disp.innerHTML = "0";
}

function addOperator(op) {
    const disp = document.getElementById('display');

    operand1 = Number(disp.innerHTML);
    currOperator = op;
    clearDisplay();
}

function operate() {
    const disp = document.getElementById('display');
    let result;

    operand2 = operand1;
    operand1 = Number(disp.innerHTML);

    if (currOperator == undefined) {
        disp.innerHTML = "OPR Err.";
        return;
    }

    if (currOperator == "/" && operand1 == "0") {
        disp.innerHTML = "DIV/0 Err.";
        return;
    }
    
    switch (currOperator) {
        case "+":
            result = operand1 + operand2;
            if (result > 9999999999 || result < -9999999999) {
                disp.innerHTML = "OVF Err.";
                return;
            }
            disp.innerHTML = fitNumber(result);
            break;
        case "-":
            result = operand1 - operand2;
            if (result > 9999999999 || result < -9999999999) {
                disp.innerHTML = "OVF Err.";
                return;
            }
            disp.innerHTML = fitNumber(result);
            break;
        case "*":
            result = operand1 * operand2;
            if (result > 9999999999 || result < -9999999999) {
                disp.innerHTML = "OVF Err.";
                return;
            }
            disp.innerHTML = fitNumber(result);
            break;
        case "/":
            result = operand2 / operand1;
            if (result > 9999999999 || result < -9999999999) {
                disp.innerHTML = "OVF Err.";
                return;
            }
            disp.innerHTML = fitNumber(result);
            break;
    }
}

function fitNumber(n) {
    const len = n.toString().length;
    const realPart = Math.floor(n).toString().length;

    if (len > 10) {
        return n.toFixed(10 - realPart);
    } else {
        return n;
    }
}