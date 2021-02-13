const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsFetchingCurrentUser = state => state.auth.IsFetchingCurrentUser;

const authSelectors = {
  getIsFetchingCurrentUser,
  getIsLoggedIn,
  getUsername,
};
export default authSelectors;
