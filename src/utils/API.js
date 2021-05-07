import axios from "axios";

export default {
    // declare function to get a random employee from the API source
    fetchEmployees: function () {
        return axios
        .get("https://randomuser.me/api/?results=20") // to loop (map) through an array of results=[number of employees in array]
        .then(res => {
            console.log(res);
            const employees = res.data.results;
            return employees.map(employee => {
                return {
                    title: employee.name.title,
                    firstName: employee.name.first,
                    lastName: employee.name.last,
                    email: employee.email
                }
            });
        })
    }
}