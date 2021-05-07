import React from "react";
import "./style.css";

function Employee(props) {
    return (
        <thead>
            <tr>
                <th>
                    <img alt={props.firstName} src={props.picture}></img>
                </th>
                <td>{props.title} {props.firstName} {props.lastName}</td>
                <td>{props.age}</td>
                <td>{props.city}, {props.country}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
            </tr>
        </thead>
    )
}

export default Employee;