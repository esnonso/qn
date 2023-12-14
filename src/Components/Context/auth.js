import { createContext, useReducer } from "react";

const existingToken = localStorage.getItem("token");

const defaultState = {
  token: existingToken === null ? "" : existingToken,
  login: () => {},
};
export const AuthContext = createContext(defaultState);

const loginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("token", action.token);
      return { token: action.token };
    }
    default:
      return null;
  }
};

const AuthContextProvider = (props) => {
  const [token, dispatch] = useReducer(
    loginReducer,
    existingToken === null ? "" : existingToken
  );

  const loginUser = (token) => {
    dispatch({ type: "LOGIN", token: token });
  };

  const authCtx = {
    token: token,
    login: loginUser,
  };

  return (
    <AuthContext.Provider value={authCtx}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
