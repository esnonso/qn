import { createPortal } from "react-dom";
import BackDropPortal from "../Backdrop/backdrop";
import Container from "../Containers/container";
import "./index.css";
import { PTags } from "../Text";

const SuccessDiv = (props) => {
  return (
    <div className="success-modal">
      <Container width="100%" justify="right">
        <button className="close-btn" onClick={props.click}>
          x
        </button>
      </Container>
      <PTags color="#155724" fontSize="larger">
        Success!
      </PTags>
      <PTags color="#155724">{props.children}</PTags>
    </div>
  );
};

const SuccessModalPortal = (props) => {
  return createPortal(
    <SuccessDiv children={props.children} click={props.click} />,
    document.getElementById("overlays")
  );
};

const SuccessModal = (props) => {
  return (
    <>
      <BackDropPortal />
      <SuccessModalPortal children={props.children} click={props.click} />
    </>
  );
};

export default SuccessModal;
