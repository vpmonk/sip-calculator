document.getElementById('calculate-btn').addEventListener('click', calculateFutureValue);

function calculateFutureValue() {
    const monthlyInvestment = parseFloat(document.getElementById('monthly-investment').value);
    const expectedReturn = parseFloat(document.getElementById('expected-return').value);
    const investmentPeriod = parseFloat(document.getElementById('investment-period').value);

    if (isNaN(monthlyInvestment) || isNaN(expectedReturn) || isNaN(investmentPeriod)) {
        document.getElementById('result').textContent = 'Please enter valid numbers for all fields.';
        return;
    }

    const futureValue = monthlyInvestment * investmentPeriod * 12 * (1 + expectedReturn / 100 / 12);

    document.getElementById('result').textContent = `Future Value: ₹${futureValue.toFixed(2)}`;
}