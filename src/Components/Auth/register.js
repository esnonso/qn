import { useState } from "react";
import { Form, Link, useActionData, useNavigation } from "react-router-dom";
import Container from "../Containers/container";
import { H1Tags } from "../Text";
import Header from "../Header";
import "./index.css";

export default function RegisterUser() {
  const [terms, setTerms] = useState(false);
  const data = useActionData();
  const navigation = useNavigation();
  const isSumbmitting = navigation.state === "submitting";
  return (
    <Container flex="column" width="100%">
      <Header color="black" />
      <Form method="POST" className="register-form-container">
        <H1Tags textAlign="center" margin="0.2rem 0" fontSize="20px">
          Register
        </H1Tags>
        {data && data.error && (
          <small style={{ color: "red" }}>Error: {data.message}</small>
        )}
        {data && !data.error && (
          <small style={{ color: "green" }}>Sucess {data.message}</small>
        )}
        <div className="form-control-reg">
          <label>Email</label>
          <input type="text" name="email" />
        </div>
        <div className="form-control-reg">
          <label>Password</label>
          <input type="password" name="password" />
        </div>

        <div className="form-control-reg">
          <label>First name</label>
          <input type="text" name="firstname" />
        </div>
        <div className="form-control-reg">
          <label>Last name</label>
          <input type="text" name="lastname" />
        </div>

        <input
          type="text"
          value="user"
          name="status"
          className="hidden"
          readOnly
        />
        <div className="form-control-check">
          <input
            type="checkbox"
            className="check"
            onChange={(e) => setTerms(e.target.checked)}
            name="terms"
          />
          <small>
            I accept all <Link to="/"> terms and conditions</Link>{" "}
          </small>
        </div>
        <div className="form-control-reg">
          <button type="submit" disabled={isSumbmitting} className="submit-btn">
            {isSumbmitting ? "Registering..." : "Register"}
          </button>
        </div>
      </Form>
    </Container>
  );
}
