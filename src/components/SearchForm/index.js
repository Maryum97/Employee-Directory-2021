import React from "react";

function SearchForm() {
    return (
        <div className="search-form row g-2">

            <div className="col-1">

            </div>

            <div className="col-8">
                <input type="search" className="form-control" aria-describedby="search-help" placeholder="Search"></input>
            </div>

            <div className="col-2">
                <button type="button" class="btn btn-primary">Find Employee</button>
            </div>
            
            <div className="col-1">

            </div>

        </div>
    )
}

export default SearchForm;