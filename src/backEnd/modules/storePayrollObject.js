const storePayrollObject = (iObj, cacheMemory) => {

    return new Promise((resolve, reject) => {

        if (cacheMemory.find((element) => { return element.EmpID === iObj.EmpID && element.PayDate.slice(0, 7) === iObj.PayDate.slice(0, 7) })) {
            reject('Payslip rejected - Employees payment for the specified period has been processed already')
        } else {
            cacheMemory.push(iObj)
            resolve(cacheMemory)
        }
    })
}

module.exports = storePayrollObject