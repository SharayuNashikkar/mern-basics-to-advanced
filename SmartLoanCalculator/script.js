function calculateLoan() {
    const amount = document.getElementById("amount").value;
    const interest = document.getElementById("interest").value;
    const years = document.getElementById("years").value;

    if (amount === "" || interest === "" || years === "") {
        alert("Please fill all fields");
        return;
    }

    const principal = parseFloat(amount);
    const monthlyInterest = parseFloat(interest) / 12 / 100;
    const months = parseFloat(years) * 12;

    const emi =
        (principal * monthlyInterest * Math.pow(1 + monthlyInterest, months)) /
        (Math.pow(1 + monthlyInterest, months) - 1);

    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    document.getElementById("emi").innerText = "₹" + emi.toFixed(2);
    document.getElementById("totalPayment").innerText = "₹" + totalPayment.toFixed(2);
    document.getElementById("totalInterest").innerText = "₹" + totalInterest.toFixed(2);
}