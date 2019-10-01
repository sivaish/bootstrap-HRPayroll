# HR Payroll Application - CSS framework

---
### `Stack`
* Nodejs (Backend)
* Bootstrap (Frontend)
* Storage (node cache memory)

---

### `Nodejs Installation Steps`
1. Download the installer from https://nodejs.org/en/.
2. Run the installer.
3. Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
4. Restart your computer. You won’t be able to run Node.js until you restart your computer.

---

### `Execution Steps`
1. Follow the above steps to install nodejs - If already installed go to step 2.
2. Download or clone the repository 
3. Open the Terminal or Bash or Powershell.
4. To make sure the nodejs has been successfully installed - Use the below commands - The result would be its corresponding versions (for instance in my machine it is V10.1.0 and 6.11.3).

```
node --version
v10.1.0
```
```
npm --version
6.11.3
```

5. Navigate to the downloaded or cloned repository.
6. Run the below command to install the dependencies.
```
npm install
```
7. Run the below command to kick start the application.
```
npm run dev
```
8. Open the port `localhost:3000` in any of the browser.

---

### `Node cache memory Infomation`
1. For simple demo purpose have used node cache memory alternativelly can use any Database of File System to store the Payslip for audit purpose.
2. The cache memory will be active for 15 minutes.

---
### `Summary`
1. Included Employee ID in the input form - To make the data unique - Since more than one employee can have same First Name and Last Name.
2. The date module will generate last business day - Not implemented the Month and Year picker - So the payslip is limited to generate for the current month. 
[Note : Month picker has been implemented in React stack]
3. The Primary combination to the backend is Employee ID and Pay Date - If an employee is paid for a particular period/month then the payslip/payment is rejected by the server and not added to the DB/storage.