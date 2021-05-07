import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Employee from "../Employee";

function EmployeeCard() {
    // declare state variable for employees
    const [employee, setEmployee] = useState({});
    const [employees, setEmployees] = useState([]);

    // when the component mounts, make call to get random employees
    useEffect(() => {
        loadEmployees();
    }, []);

    // declare function to load employees
    // API call to fetch an employee
    function loadEmployees() {
        API.fetchEmployees()
        .then(employees => {
            setEmployees(employees);
            setEmployee(employees[0]);
        })

        .catch(err => console.log(err));
    }

    return (
        <div className="employee-card">
            <p>Hello, here is the list of employees!</p>
            <Employee 
            name={employee.name}
            />
        </div>
    );
}

export default EmployeeCard;