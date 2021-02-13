const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsFetchingCurrentUser = state => state.auth.IsFetchingCurrentUser;

const getErrorLogin = state => state.auth.errorLogin;

const getErrorRegister = state => state.auth.errorRegister;

const authSelectors = {
  getIsFetchingCurrentUser,
  getIsLoggedIn,
  getUsername,
  getErrorLogin,
  getErrorRegister,
};
export default authSelectors;
