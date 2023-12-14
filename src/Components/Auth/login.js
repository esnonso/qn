import {
  Form,
  Link,
  useNavigation,
  useActionData,
  useNavigate,
} from "react-router-dom";
import { useContext, useEffect } from "react";
import "./login.css";
import Header from "../Header";
import Container from "../Containers/container";
import Footer from "../Footer";
import { AuthContext } from "../Context/auth";

const LoginComponent = (props) => {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSumbmitting = navigation.state === "submitting";
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (authCtx.token) navigate("/");
  }, []);

  return (
    <Container width="100%" flex="column">
      <Header textColor="black" color="black" />
      <Container flex="column" width="100%" height="70vh">
        <Form method="POST">
          <div className="form-control-login">
            <label>Email</label>
            <input type="text" name="email" />
          </div>
          <div className="form-control-login">
            <label>Password</label>
            <input type="password" name="password" />
          </div>

          <div className="form-control-login">
            <small style={{ marginBottom: "1rem" }}>
              Not Registered? <Link to="/register">click to register</Link>
            </small>
          </div>
          <div className="form-control-login">
            <button
              type="submit"
              disabled={isSumbmitting}
              className="submit-btn"
            >
              {isSumbmitting ? "..." : "Login"}
            </button>
          </div>
        </Form>
      </Container>
      <Footer />
    </Container>
  );
};

export default LoginComponent;
