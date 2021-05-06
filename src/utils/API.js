import axios from "axios";

export default {
    // declare function to get a random employee from the API source
    getRandomUser: function () {
        return axios.get("https://randomuser.me/api/");
    }
}