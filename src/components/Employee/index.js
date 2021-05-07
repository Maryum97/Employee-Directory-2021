import React from "react";
import "./style.css";

function Employee(props) {
    return (
        <div className="row single-employee">
            <div className="col-3">
                <img src={props.picture}></img>
            </div>
            <div className="col-9">
                <p className="name">{props.title} {props.firstName} {props.lastName}</p>
                <p className="age"><b>{props.age}</b> years old</p>
                <p className="phone"><b>phone number:</b> {props.phone}</p>
                <p className="email"><b>email:</b> {props.email}</p>
            </div>
        </div>
    )
}

export default Employee;