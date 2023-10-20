import { createPortal } from "react-dom";
import { BackDropPortal } from "../../MobileNavigator";
import VideoForm from "./videoForm";

const VideoFormPortal = (props) => {
  return createPortal(
    <VideoForm onClose={props.onHide} />,
    document.getElementById("overlays")
  );
};

const AddVideo = (props) => {
  return (
    <>
      <BackDropPortal />
      <VideoFormPortal onHide={props.onHide} />
    </>
  );
};

export default AddVideo;
