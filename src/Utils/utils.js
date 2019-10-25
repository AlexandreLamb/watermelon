/**
 * Divers
 */

export function checkId(arrayToCheck) {
    let idTab = [];
    arrayToCheck.forEach(function(element) {
        idTab.push(element.id);
    });
    return idTab.length == 0 ? 1 : Math.max(...idTab) + 1;
}
export function return4FirstCardNumber(brand) {
    switch (brand) {
        case "Visa": {
            return "4974";
        }
        case "Master Card": {
            return "5555";
        }
        case "American express": {
            return "370";
        }
        default: {
            return "0000";
        }
    }
}

/**
 * Cards Functions
 */

export function returnCards() {
    return localStorage.getItem("Cards")
        ? JSON.parse(localStorage.getItem("Cards"))
        : [];
}

/**
 * Users Functions
 */

export function returnFullName(userId) {
    let users = JSON.parse(localStorage.getItem("Users"));
    let fullName = "";
    users.forEach(user => {
        if (user.id == userId) {
            fullName = user.fname + " " + user.lname;
        }
    });
    return fullName;
}
export function returnUser() {
    return JSON.parse(localStorage.getItem("connectUser"));
}
export function returnUsers() {
    return localStorage.getItem("Users")
        ? JSON.parse(localStorage.getItem("Users"))
        : [];
}
export function findUserId(userEmail) {
    let users = JSON.parse(localStorage.getItem("Users"));
    let userId = -1;
    users.forEach(user => {
        if (user.email == userEmail) {
            userId = user.id;
        }
    });
    return userId;
}
export function returnUserId() {
    let user = JSON.parse(localStorage.getItem("connectUser"));
    return user.id;
}

/**
 *  Wallet Functions
 */

export function findWallet(user) {
    let wallets = JSON.parse(localStorage.getItem("Wallets"));
    let wallet = {};
    wallets.forEach(element => {
        if (element.userId == user.id) {
            wallet = element;
        }
    });
    return wallet;
}

/**
 *  Transferts Functions
 */

export function returnTransfertsIn() {
    let user = returnUser();
    let wallet = findWallet(user);
    let transferts = localStorage.getItem("Transfers")
        ? JSON.parse(localStorage.getItem("Transfers"))
        : [];
    let transfertIn = [];
    transferts.forEach(elmt => {
        if (elmt.credited_wallet_id == wallet.id) {
            transfertIn.push(elmt);
        }
    });
    return transfertIn;
}
export function returnTransfertsOut() {
    let user = returnUser();
    let wallet = findWallet(user);
    let transferts = localStorage.getItem("Transfers")
        ? JSON.parse(localStorage.getItem("Transfers"))
        : [];
    let transfertOut = [];
    transferts.forEach(elmt => {
        if (elmt.debited_wallet_id == wallet.id) {
            transfertOut.push(elmt);
        }
    });
    return transfertOut;
}

/**
 * Balances Functions
 */

export function findBalance() {
    let wallet = findWallet(returnUser());
    return wallet.balance;
}
