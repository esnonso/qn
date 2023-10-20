import { createPortal } from "react-dom";
import { BackDropPortal } from "../../MobileNavigator";
import RegisterComponent from "../auth/register";

const RegisterFormPortal = (props) => {
  return createPortal(
    <RegisterComponent onClose={props.onHide} />,
    document.getElementById("overlays")
  );
};

const CreateUser = (props) => {
  return (
    <>
      <BackDropPortal />
      <RegisterFormPortal onHide={props.onClose} />
    </>
  );
};

export default CreateUser;
