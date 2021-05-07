// main dependencies
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
// import components here
import Employee from "../Employee";
import TableColumm from "../TableColumn"

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
            <TableColumm size="md-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Full Name</th>
                            <th>Age</th>
                            <th>Location</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
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
                </table>
            </TableColumm>
        </div>
    );
}

export default EmployeeCard;