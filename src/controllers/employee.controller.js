const EmployeeModal = require('../modals/employee.Modal');

// Get all employee list
exports.getAllEmployeeList = (req, res) => {
    // console.log("Get all employee List");
    EmployeeModal.getAlemployee((err, employee) => {
        console.log("We are here");
        if (err)
            res.send(err);
        console.log("Employee", employee);
        res.send(employee);
    })
}


// Get employee by id

exports.getEmployeeByID = (req, res) => {
    // console.log('get employee by id');
    EmployeeModal.getEmployeeByID(req.params.id, (err, employee) => {
        if (err)
            res.send(err);
        console.log('Employee by id', employee);
        res.send(employee);
    });

};

// Create new employee by Post 
exports.createNewEmployee = (req, res) => {
    console.log("req data", req.body);
    const employeeReqData = new EmployeeModal(req.body);
    console.log('employeeReqData', employeeReqData);

    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(404).send({ sucess: false, message: 'Please fill all fields' });
    } else {
        console.log('valid data');
        EmployeeModal.createEmployee(employeeReqData, (err, employee) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: "Data inserted sucessfully", data: employee.insertId })

        })
    }
}


// Update employee
exports.updateEmployee = (req, res) => {
    console.log("req data", req.body);
    const employeeReqData = new EmployeeModal(req.body);
    console.log('employeeReqData update', employeeReqData);

    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(404).send({ sucess: false, message: 'Please fill all fields' });
    } else {
        console.log('valid data');
        EmployeeModal.updateEmployee(req.params.id, employeeReqData, (err, employee) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: "Employee updated sucessfully", data: employee.insertId })

        })
    }
}

// Delete employee
exports.deleteEmployee = (req, res) => {
    EmployeeModal.deleteEmployee(req.params.id, (err, employee) => {
        if (err)
            res.send(err);
        res.json({ success: true, message: 'Employee deleted successfully' })

    })
}
