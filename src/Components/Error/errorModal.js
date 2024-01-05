import { createPortal } from "react-dom";
import { useRouteError } from "react-router-dom";
import BackDropPortal from "../Backdrop/backdrop";
import Container from "../Containers/container";
import "./index.css";
import { PTags } from "../Text";

const ErrorDiv = (props) => {
  const error = useRouteError();
  return (
    <div className="error-modal">
      <Container width="100%" justify="right">
        {props.children && (
          <button className="close-btn-err" onClick={props.click}>
            x
          </button>
        )}
      </Container>
      <PTags color="#721C24" fontSize="larger">
        {error &&
          error.status &&
          "Error " +
            error.status +
            ": " +
            (error.data.message || "Page or resource not found")}
      </PTags>
      <PTags color="#721C24" fontSize="larger">
        {props.children}
      </PTags>
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
