export function checkId(arrayToCheck) {
  let idTab = [];
  arrayToCheck.forEach(function(element) {
    idTab.push(element.id);
  });
  return idTab.length == 0 ? 1 : Math.max(...idTab) + 1;
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
export function returnUserId(user) {
  return user.id;
}
export function returnFullName(userId){
  let users = JSON.parse(localStorage.getItem("Users"));
  let fullName = "";
  users.forEach(user => {
    if (user.email == userId) {
      fullName = user.fname + " " + user.lname;
    }
  });
  return fullName;
}
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
export function findBalance(){
  let wallet = findWallet(returnUser());
  return wallet.balance;
}
export function returnUser(){
  return JSON.parse(localStorage.getItem("connectUser"));
}
export function returnUsers(){
  return localStorage.getItem("Users") ? JSON.parse(localStorage.getItem("Users")) : []
}
