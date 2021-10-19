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
    const depositAmounts = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmounts);

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = ""
})

// withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw")
withdrawBtn.addEventListener("click", function() {
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);
})

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}