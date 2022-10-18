let users = [
  { id: 1, email: "u1@user.com", password: "1111" },
  { id: 2, email: "u2@user.com", password: "2222" },
];
//
exports.deleteUser = function (id) {
  let deletedCount = 0;
  users = users.filter((u) => {
    deletedCount += u.id == Number(id) ? 1 : 0;
    return u.id != Number(id);
  });
  return deletedCount;
};
//
exports.getUsers = function () {
  return [...users];
};

//
exports.getUserByID = function (id) {
  return users.find((u) => u.id === Number(id));
};
//
exports.updateUser = function (updatedUser) {
  for (let index = 0; index < users.length; index++) {
    if (users[index].id == updatedUser.id) {
      users[index] = { ...updatedUser };
      return updatedUser;
    }
  }
  return null;
};
//
exports.addUser = function (newUser) {
  if (newUser && newUser.email && newUser.password) {
    let existingUser = users.find((u) => u.email == newUser.email);
    if (existingUser) throw Error("email allready exists");
    else {
      newUser.id = getNewUserID();
      users.push(newUser);
      return newUser;
    }
  } else throw Error("invalid user data");
};
//
function getNewUserID() {
  if (!users || users.length == 0) return 1;
  else return users[users.length - 1].id + 1;
}
