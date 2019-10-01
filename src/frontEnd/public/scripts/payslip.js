const payDate = document.querySelector('#payDate')
const payFrequency = document.querySelector('#payFrequency')
const annualIncome = document.querySelector('#annualIncome')
const grossIncome = document.querySelector('#grossIncome')
const incomeTax = document.querySelector('#incomeTax')
const netIncome = document.querySelector('#netIncome')
const empSuper = document.querySelector('#empSuper')
const empPay = document.querySelector('#empPay')
const empID = document.querySelector('#empID')
const empName = document.querySelector('#empName')
const payment = document.querySelector('form')
const message = document.querySelector('#messages')


window.onload

const empDetails = JSON.parse(localStorage.getItem('empPayDetails'))

const sFirstName = JSON.stringify(empDetails.FirstName)
const sLastName = JSON.stringify(empDetails.LastName)

empName.innerHTML = empDetails.FirstName.concat(" ", empDetails.LastName)
empID.innerHTML = empDetails.EmpID
payDate.innerHTML = empDetails.PayDate
payFrequency.innerHTML = empDetails.PayFrequency
annualIncome.innerHTML = empDetails.AnnualIncome
grossIncome.innerHTML = empDetails.GrossSalary
incomeTax.innerHTML = empDetails.IncomeTax
netIncome.innerHTML = empDetails.NetIncome
empSuper.innerHTML = empDetails.Super
empPay.innerHTML = empDetails.Pay


payment.addEventListener('submit', async (evt) => {
    evt.preventDefault()

    fetch('/addToPayroll', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(empDetails)
    })
        .then((res) => {
            if (res.status == 400) {
                message.textContent = 'Payslip rejected - Employees payment for the specified period has been processed already'
            } else if (res.status == 200) {
                message.textContent = 'Payment successful and Payslip added to DB'
            } else {
                message.textContent = 'Bad Request'
            }
            localStorage.clear()
        })
        .catch((err) => {
            console.log('error', err)
        })

})





