import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Employee from "../Employee";

function EmployeeCard() {
    // declare state variables
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
            {[...employees].map((employee => (
                <Employee
                    title={employee.title}
                    firstName={employee.firstName}
                    lastName={employee.lastName}
                    age={employee.age}
                    phone={employee.phone}
                    email={employee.email}
                    city={employee.city}
                    country={employee.country}
                    picture={employee.picture}
                />
            )))}
        </div>
    );
}

export default EmployeeCard;