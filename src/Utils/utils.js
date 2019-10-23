export function checkId(arrayToCheck) {
  let idTab = [];
  arrayToCheck.forEach(function(element) {
    idTab.push(element.id);
  });
  return idTab.length == 0 ? 1 : Math.max(...idTab) + 1;
}

export function findUserId(userEmail){
    let users = JSON.parse(localStorage.getItem("Users"));
    let userId = -1;
    users.forEach(user => {
      if (user.email == userEmail) {
        userId = user.id;
      }
    });
    return userId;
}
