import React from "react";
import "./style.css";

function Employee(props) {
    return (
        <div className="single-employee">
            <p className="name">{props.title} {props.firstName} {props.lastName}</p>
            <p className="email">{props.email}</p>
        </div>
    )
}

export default Employee;