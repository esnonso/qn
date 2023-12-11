import { createPortal } from "react-dom";
import "./backdrop.css";

const BackDrop = () => {
  return <div className="backdrops"></div>;
};

const BackDropPortal = () => {
  return createPortal(<BackDrop />, document.getElementById("overlays"));
};

export default BackDropPortal;
