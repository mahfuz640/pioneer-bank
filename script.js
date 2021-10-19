// login button event hamdler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none"
    const transaction = document.getElementById("transaction-area");
    transaction.style.display = "block"
})


// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function() {
    const depositNumber = getInputNumber("depositAmount")

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = ""
})

// withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw")
withdrawBtn.addEventListener("click", function() {
    const withdrawNumber = getInputNumber("withdrawAmount")
    console.log(withdrawNumber);
})

function getInputNumber(id) {
    const withdrawAmount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}