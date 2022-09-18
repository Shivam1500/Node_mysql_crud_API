const express = require('express');
const router = express.Router();


const employeeController = require('../controllers/employee.controller');

// Get all employees List 
router.get('/', employeeController.getAllEmployeeList);

// Get employee by ID
router.get('/:id', employeeController.getEmployeeByID);

// create new employee
router.post('/', employeeController.createNewEmployee);

// update employee
router.put('/:id', employeeController.updateEmployee);

// delete employee
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;