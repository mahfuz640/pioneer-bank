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
    const depositAmounts = document.getElementById("depositAmount").value; //value add hoi in
    const depositNumber = parseFloat(depositAmounts)

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;

    document.getElementById("currentDeposit").innerText = totalDeposit;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById("currentBalance").innerText = totalBalance

    document.getElementById("depositAmount").value = "";
})

// add function
functionl updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText
    const currentNumber = parseFloat(current)
    const totalAmount = depositAmount + currentNumber
    document.getElementById(id).innerText = totalAmount

}