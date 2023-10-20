import { Form } from "react-router-dom";
import "../index.css";
import Container from "../../Containers/container";
import Button from "../../Button";
import { H1Tags } from "../../Text";

const RegisterComponent = (props) => {
  return (
    <Form method="POST" className="post-form-container">
      <Container justify="flex-end">
        <Button
          text="X"
          color="red"
          back={"inherit"}
          width="10rem"
          height="3rem"
          borderRadius="5px"
          font="larger"
          type="button"
          click={props.onClose}
        />
      </Container>
      <H1Tags textAlign="center" margin="0.2rem 0" fontSize="20px">
        Add User
      </H1Tags>
      <div className="form-control-post">
        <label>Email</label>
        <input type="text" name="email" />
      </div>
      <div className="form-control-post">
        <label>Password</label>
        <input type="password" name="password" />
      </div>

      <div className="form-control-post">
        <label>First name</label>
        <input type="text" name="firstname" />
      </div>
      <div className="form-control-post">
        <label>Last name</label>
        <input type="text" name="lastname" />
      </div>
      <div className="form-control-post">
        <Button
          text="Add"
          color="#D1BB71"
          back={"black"}
          width="10rem"
          height="3rem"
          borderRadius="5px"
          font="large"
          type="submit"
        />
      </div>
    </Form>
  );
};

export default RegisterComponent;
