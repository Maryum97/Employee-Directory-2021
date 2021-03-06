import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <Link className="navbar-brand" to="/">
                My<b>React</b>App
      </Link>
        </nav>
    );
}

export default Navbar;
