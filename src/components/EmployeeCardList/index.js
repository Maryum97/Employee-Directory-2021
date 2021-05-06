import React from "react";
import EmployeeCard from "../EmployeeCard";

function EmployeeCardList({ employees }) {
    return (
        // loop through all the employees and return the following properties
        // from EmployeeCard component
        employees.map(employee => {
            <EmployeeCard />
        })
    )
}

export default EmployeeCardList;