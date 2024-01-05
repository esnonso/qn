import { createPortal } from "react-dom";
import { BackDropPortal } from "../../MobileNavigator";
import EditVideoForm from "./EditVideoForm";

const EditVideoFormPortal = (props) => {
  return createPortal(
    <EditVideoForm onClose={props.onHide} data={props.data} />,
    document.getElementById("overlays")
  );
};

const EditVideos = (props) => {
  return (
    <>
      <BackDropPortal />
      <EditVideoFormPortal onHide={props.onHide} data={props.data} />
    </>
  );
};

export default EditVideos;
