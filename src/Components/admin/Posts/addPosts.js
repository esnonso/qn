import { createPortal } from "react-dom";
import { BackDropPortal } from "../../MobileNavigator";
import PostForm from "./PostForm";

const PostFormPortal = (props) => {
  return createPortal(
    <PostForm onClose={props.onHide} />,
    document.getElementById("overlays")
  );
};

const AddPosts = (props) => {
  return (
    <>
      <BackDropPortal />
      <PostFormPortal onHide={props.onHide} />
    </>
  );
};

export default AddPosts;
