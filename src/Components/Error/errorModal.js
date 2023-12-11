import { createPortal } from "react-dom";
import BackDropPortal from "../Backdrop/backdrop";
import Container from "../Containers/container";
import "./index.css";

const ErrorDiv = (props) => {
  return (
    <div className="error-modal">
      <Container width="100%" justify="right">
        <button className="close-btn" onClick={props.click}>
          x
        </button>
      </Container>
      {props.children}
    </div>
  );
};

const ErrorModalPortal = (props) => {
  return createPortal(
    <ErrorDiv children={props.children} click={props.click} />,
    document.getElementById("overlays")
  );
};

const ErrorModal = (props) => {
  return (
    <>
      <BackDropPortal />
      <ErrorModalPortal children={props.children} click={props.click} />
    </>
  );
};

export default ErrorModal;
