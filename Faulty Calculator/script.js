function calculate() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let op = document.getElementById("operator").value;
    let resultBox = document.getElementById("result");

    if (isNaN(a) || isNaN(b)) {
        resultBox.innerText = "❌ Please enter valid numbers";
        return;
    }

    let random = Math.random();
    let result;
    let faulty = random < 0.1;

    if (faulty) {
        // Faulty behavior
        if (op === "+") result = a - b;
        else if (op === "*") result = a + b;
        else if (op === "-") result = a / b;
        else if (op === "/") result = a ** b;

        resultBox.innerText = `😈 Faulty Result: ${result}`;
        resultBox.style.color = "#ff4d4d";
    } else {
        // Correct behavior
        if (op === "+") result = a + b;
        else if (op === "*") result = a * b;
        else if (op === "-") result = a - b;
        else if (op === "/") result = a / b;
        
        resultBox.innerText = `✅ Correct Result: ${result}`;
        resultBox.style.color = "#00ff9d";
    }
}
