const dbConn = require('../../config/db.config');


const Employee = function (employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organisation = employee.organisation;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
}

// get all employee by using mysql QUERY
Employee.getAlemployee = (result) => {
    dbConn.query('SELECT * FROM employee', (err, res) => {
        if (err) {
            console.log("Error while fetching employee", err);
            result(null, err);
        } else {
            console.log('Employee fetched sucessfully');
            result(null, res);
        }
    });
};


// Get employee by id from DB
Employee.getEmployeeByID = (id, result) => {
    dbConn.query('SELECT * FROM employee WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log("Error while Fetching employee by id", err);
            result(null, err);
        } else {
            console.log("Employee Fetched sucessfully by id");
            result(null, res);
        }
    })
}

//  Create New employee
Employee.createEmployee = (employeeReqData, result) => {
    dbConn.query('INSERT INTO employee SET ?', employeeReqData, (err, res) => {
        if (err) {
            console.log("error while inserting data");
            result(null, err);
        } else {
            console.log("Employee Created sucessfully");
            result(null, res)
        }
    })
}

// update employee
Employee.updateEmployee = (id, employeeReqData, result) => {
    dbConn.query("UPDATE employee SET first_name = ?,last_name =?,email = ?,phone = ?,organisation = ?,designation = ? ,salary = ?,status = ? ,WHERE id = ? ", [employeeReqData.first_name, employeeReqData.last_name, employeeReqData.email, employeeReqData.phone, employeeReqData.organisation, employeeReqData.designation, employeeReqData.salary, employeeReqData.status, id], (err, res) => {
        if (err) {
            console.log("err while updating the employee");
            result(null, err);
        } else {
            console.log("Employee updated successfully");
            result(null, res);
        }
    })
}

// delete employee
Employee.deleteEmployee = (id, result) => {
    dbConn.query('DELETE FROM employee where id = ?', [id], (err, res) => {
        if (err) {
            console.log("Error while deleting Employee data");
            result(null, err);
        } else {
            result(null, res);
        }
    })
    // dbConn.query("UPDATE employee SET is_deleted = ? WHERE id = ? ", [1, id], (err, res) => {
    //     if (err) {
    //         console.log("err while deleting the employee");
    //         result(null, err);
    //     } else {
    //         console.log("Employee deleted successfully");
    //         result(null, res);
    //     }
    // })
}
module.exports = Employee;
