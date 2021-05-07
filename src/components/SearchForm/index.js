import React from "react";

function SearchForm(props) {
    return (
        <div className="search-form row g-2">

            <div className="col-7">
                <input
                    type="search"
                    className="form-control"
                    aria-describedby="search-help"
                    placeholder="Search"
                    onChange={props.handleInputChange}
                />
            </div>
            
            <div className="col-1">

            </div>

            <div className="col-2">
                <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={props.handleFormSubmit}
                >
                    Find Employee
                </button>
            </div>

            <div className="col-2">
                <button
                    type="submit"
                    class="btn btn-danger"
                    onClick={props.clearSearch}
                >
                    Reset Search
                </button>
            </div>

        </div>
    )
}

export default SearchForm;