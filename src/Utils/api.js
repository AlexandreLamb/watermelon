const axios = require("axios");

export function apiRequestUser() {
    axios
        .get("https://randomuser.me/api/?results=20")
        .then(function(response) {
            // handle success
            let users = response.data.results;
            localStorage.setItem("Users", JSON.stringify(parseUsers(users)));
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
        .finally(function() {
            // always executed
        });
}

function parseUsers(users) {
    let parseUsers = [];
    let wallets = [];
    users.forEach((user, index) => {
        parseUsers.push({
            email: user.email,
            password: user.login.password,
            id: index,
            fname: user.name.first,
            lname: user.name.last
        });
        wallets.push({ id: index, userId: index, balance: 0 });
    });
    localStorage.setItem("Wallets", JSON.stringify(wallets));
    return parseUsers;
}
