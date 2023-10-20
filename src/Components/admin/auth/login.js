import { Form } from "react-router-dom";

import "./login.css";
import Header from "../../Header";
import Container from "../../Containers/container";
import Footer from "../../Footer";

const LoginComponent = (props) => {
  return (
    <>
      <Header textColor="black" color="black" />
      <Container flex="column" width="100%" height="70vh">
        <Form method="POST">
          <div className="form-control">
            <label>Email</label>
            <input type="text" name="email" />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <div className="form-control">
            <button>Submit</button>
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default LoginComponent;
