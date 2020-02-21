import axios from "axios";

export default {
    amountOfUsers: function(users){
        return axios.get(`https://randomuser.me/api/?results=` + users);
    }
};