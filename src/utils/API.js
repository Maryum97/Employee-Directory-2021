import axios from "axios";

export default {
    // declare function to get a random employee from the API source
    fetchEmployees: function () {
        return axios
        .get("https://randomuser.me/api/?results=100") // to loop (map) through an array of results=[number of employees in array]
        .then(res => {
            const employees = res.data.results;
            return employees.map((employee, i) => {
                return {
                    key: i,
                    title: employee.name.title,
                    firstName: employee.name.first,
                    lastName: employee.name.last,
                    age: employee.dob.age,
                    phone: employee.phone,
                    email: employee.email,
                    city: employee.location.city,
                    country: employee.location.country,
                    picture: employee.picture.large
                }
            });
        })
    }
}