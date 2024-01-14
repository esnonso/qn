import { createContext, useReducer } from "react";

const existingToken = localStorage.getItem("token");

const defaultState = {
  token: existingToken === null ? "" : existingToken,
  login: () => {},
  logout: () => {}, // Add logout function
};

export const AuthContext = createContext(defaultState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("token", action.token);
      return { token: action.token };
    }
    case "LOGOUT": {
      localStorage.removeItem("token");
      return { token: "" };
    }
    default:
      return state;
  }
};

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(
    authReducer,
    existingToken === null ? { token: "" } : { token: existingToken }
  );

  const loginUser = (token) => {
    dispatch({ type: "LOGIN", token: token });
  };

  const logoutUser = () => {
    dispatch({ type: "LOGOUT" });
  };

  const authCtx = {
    token: state.token,
    login: loginUser,
    logout: logoutUser,
  };

  return (
    <AuthContext.Provider value={authCtx}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
