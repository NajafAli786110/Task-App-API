const setAndGetCurrUser = new Map();

function setUser(id, user) {
  setAndGetCurrUser.set(id, user);
}

function getUser(id) {
  setAndGetCurrUser.get(id);
}

export { setUser, getUser };
