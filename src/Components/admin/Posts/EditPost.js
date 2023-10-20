import { createPortal } from "react-dom";
import { BackDropPortal } from "../../MobileNavigator";
import EditPostForm from "./EditPostForm";

const EditPostFormPortal = (props) => {
  return createPortal(
    <EditPostForm onClose={props.onHide} data={props.data} />,
    document.getElementById("overlays")
  );
};

const EditPosts = (props) => {
  return (
    <>
      <BackDropPortal />
      <EditPostFormPortal onHide={props.onHide} data={props.data} />
    </>
  );
};

export default EditPosts;
