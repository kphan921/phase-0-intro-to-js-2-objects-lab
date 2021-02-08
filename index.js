// Write your solution in this file!
var employee = {};
employee.name = 'Kai';
employee.streetAddress = '123 Fake St';

function updateEmployeeWithKeyAndValue(employee, key, value) {
    var newObj = {...employee};
    newObj[key] = value;
    return newObj;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key) {
    var newObj = {...employee};
    delete newObj[key];
    return newObj;
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}