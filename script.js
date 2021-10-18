// login button handle
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
        const loginArea = document.getElementById("login-area")
        loginArea.style.display = "none";

        const transactionArea = document.getElementById("transaction-area");
        transactionArea.style.display = "block";
    })
    // deposite button event handler
const depositBtn = document.getElementById("addDeposit")
depositBtn.addEventListener("click", function() {
    const depositAmounts = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmounts)

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})

// add function
function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText
    const currentNumber = parseFloat(current)
    const totalAmount = depositNumber + currentNumber
    document.getElementById(id).innerText = totalAmount

}