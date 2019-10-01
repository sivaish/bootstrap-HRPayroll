const generatePaySlip = document.querySelector('form')

generatePaySlip.addEventListener('submit', async (evt) => {
  evt.preventDefault()

  const annualSalary = generatePaySlip.elements.annualSalary.value
  let date = lastBusinessDayOfMonth()
  const payDate = JSON.stringify(date).slice(1, 11)
  const payFrequency = "Monthly"
  const grossSalary = Math.round(annualSalary / 12)
  const incomeTax = incometax(annualSalary)
  const netIncome = grossSalary - incomeTax
  const empSuper = Math.round(grossSalary * (generatePaySlip.elements.super.value / 100))
  const netPay = netIncome - empSuper

  const empDtls = {
    "EmpID": generatePaySlip.elements.empID.value,
    "FirstName": generatePaySlip.elements.firstName.value,
    "LastName": generatePaySlip.elements.lastName.value,
    "PayDate": payDate,
    "PayFrequency": payFrequency,
    "AnnualIncome": annualSalary,
    "GrossSalary": grossSalary,
    "IncomeTax": incomeTax,
    "NetIncome": netIncome,
    "Super": empSuper,
    "Pay": netPay
  }

  localStorage.setItem('empPayDetails', JSON.stringify(empDtls))

  let url = '/payslip'

  document.location = url

})

const lastBusinessDayOfMonth = (year, month) => {

  let date = new Date
  let offset = 0
  let result = null
  let adjustments = 1
  let saturday = 0
  let sunday = 6

  if (typeof year === 'undefined' || year === null) {
    year = date.getFullYear()
  }

  if (typeof month === 'undefined' || month === null) {
    month = date.getMonth() + adjustments
  }

  result = new Date(year, month, offset);

  while (result.getDay() === saturday || result.getDay() === sunday) {
    offset--
    result = new Date(year, month, offset);
  }

  return result;
}

const incometax = (annualSalary) => {
  let minAmount = 0
  let cutoff = 0
  let cents = 0

  if (annualSalary >= 0 && annualSalary <= 18200) {
    minAmount = 0
    cutoff = 0
    cents = 0
  } else if (annualSalary >= 18201 && annualSalary <= 37000) {
    minAmount = 0
    cutoff = 18200
    cents = 0.19
  } else if (annualSalary >= 37001 && annualSalary <= 80000) {
    minAmount = 3572
    cutoff = 37000
    cents = 0.325
  } else if (annualSalary >= 80001 && annualSalary <= 180000) {
    minAmount = 17547
    cutoff = 80000
    cents = 0.37
  } else if (annualSalary >= 180001) {
    minAmount = 54547
    cutoff = 180000
    cents = 0.45
  }

  const tax = Math.round((minAmount + (annualSalary - cutoff) * cents) / 12)

  return tax

}