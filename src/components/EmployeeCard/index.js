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
    // API call from API.js to fetch an employee
    const loadEmployees = () => {
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
        const searchedEmployee = employees.filter(employee => {

            if (employee.firstName.toLowerCase() === search) {
                return search;
            }

            if (employee.lastName.toLowerCase() === search) {
                return search;
            }

            if (employee.title.toLowerCase() === search) {
                return search;
            }

        });

        setEmployees(searchedEmployee);
    }

    // load results based on name typed in input
    function handleInputChange(e) {
        setSearch(e.target.value);
    }

    // load results just after clicking on the button
    function handleFormSubmit(e) {
        e.preventDefault();
        getSearchResults(search);
    }

    // sort results by age (in ascending order)
    function sortByAge() {
        const sorted = employees.sort((result1, result2) => {
            if (result1.age < result2.age) {
                return -1;
            }

            if (result1.age > result2.age) {
                return 1;
            }

            return 0;
        });

        setEmployees([...sorted]);
    }

    // sort results just after clicking on button
    function handleSortByAge(e) {
        e.preventDefault();
        sortByAge();
    }

    // sort results in alphabetical order (first name)
    function sortAlphabetical() {
        const sorted = employees.sort((result1, result2) => {
            if (result1.firstName < result2.firstName) {
                return -1;
            }

            if (result1.firstName > result2.firstName) {
                return 1;
            }

            return 0;
        });

        setEmployees([...sorted]);
    }

    // sort results just after clicking on button
    function handleSortAlphabetical(e) {
        e.preventDefault();
        sortAlphabetical();
    }

    // sort results by phone number
    function sortByPhone() {
        const sorted = employees.sort((result1, result2) => {
            if (result1.phone < result2.phone) {
                return -1;
            }

            if (result1.phone > result2.phone) {
                return 1;
            }

            return 0;
        });

        setEmployees([...sorted]);
    }

    // sort results just after clicking on button
    function handleSortByPhone(e) {
        e.preventDefault();
        sortByPhone();
    }

    // clear search
    function clearSearch(e) {
        e.preventDefault();
        setSearch("");
        loadEmployees();
    }

    return (
        <div className="container">
            <SearchForm
                value={search}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                clearSearch={clearSearch}
            />
            <br></br>

            <button
                type="submit"
                className="age btn btn-info"
                onClick={handleSortByAge}
            >
                Sort By Age
                    </button>

            <button
                type="submit"
                className="alphabetical btn btn-info"
                onClick={handleSortAlphabetical}
            >
                Sort Alphabetically
                    </button>

            <button
                type="submit"
                className="age btn btn-info"
                onClick={handleSortByPhone}
            >
                Sort By Phone No.
                    </button>

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
                            key={employee.key}
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