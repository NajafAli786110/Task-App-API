const GetAndSetUsersByID = new Map();

function setUsers(id, user) {
  return GetAndSetUsersByID.set(id, user);
}

function getUsers(id) {
  return GetAndSetUsersByID.get(id);
}

export {
    getUsers,
    setUsers,
}