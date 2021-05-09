import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="container">
            <div className="col-12">
                <header className="header">
                    <h1>Employee Directory</h1>
                    <p>Search for an employee by First or Last name, or sort all employees by Category</p>
                </header>
            </div>
        </div>
    );
}

export default Header;