import axios from "axios";

export default {
    // declare function to get a random employee from the API source
    fetchEmployees: function () {
        return axios
        .get("https://randomuser.me/api/")
        .then(res => {
            const employees = res.data;
            return employees.map(employee => {
                return {
                    name: employee.name.first
                }
            })
        })
    }
}