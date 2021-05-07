// main dependencies
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
// import components here
import Employee from "../Employee";
import TableColumm from "../TableColumn";
import SearchForm from "../SearchForm";

function EmployeeCard() {
    // declare state variables
    const [employee, setEmployee] = useState({});
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState('');

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
                setEmployee(employee);
            })

            .catch(err => console.log(err));
    }

    // load search results on page
    function getSearchResults() {
        console.log('Searching for: ' + search);
        console.log(search);
        console.log(employees);
        const searchedEmployee = employees.filter(target_employee =>
            search.toLowerCase() === target_employee.firstName.toLowerCase() || search.toLowerCase() === target_employee.lastname.toLowerCase()
        );
        setEmployees(searchedEmployee);
    }

    function handleInputChange(e) {
        setSearch(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        getSearchResults(search);
    }

    return (
        <div className="employee-card">
            <SearchForm
                value={search}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
            <br></br>
            <TableColumm size="md-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Photo</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Location</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
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