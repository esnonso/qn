import { createPortal } from "react-dom";
import BackDropPortal from "../Backdrop/backdrop";
import "./index.css";

const ModalDiv = (props) => {
  return <div className="modal">{props.children}</div>;
};

const ModalPortal = (props) => {
  return createPortal(
    <ModalDiv children={props.children} />,
    document.getElementById("overlays")
  );
};

const Modal = (props) => {
  return (
    <>
      <BackDropPortal />
      <ModalPortal children={props.children} />
    </>
  );
};

export default Modal;
