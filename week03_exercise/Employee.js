

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
];

module.exports = {

    // Get all employee details
    getAllEmployeeDetails: () => employees,

    // Get all employee full names (ascending)
    getEmployeeNames: () => {
            return employees
                .map(emp => `${emp.firstName} ${emp.lastName}`)
                .sort();
    },

    // Get the total salary of all employees
    getEmployeeTotalSal: () => {
        return employees.reduce((total, next) => total + next.Salary, 0);
    }
};