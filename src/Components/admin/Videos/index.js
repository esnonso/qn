import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../Containers/container";
import AddVideo from "./addVideos";
import Button from "../../Button";
import "../index.css";

const ManageVideos = () => {
  const [modal, showModal] = useState(false);
  const [editForm, showEdit] = useState(false);
  const [itemToBeEdited, setItemToBeEdited] = useState("");

  const data = useLoaderData();
  const showModalHandler = () => showModal((prevState) => !prevState);
  const hideModalHandler = () => showModal(false);

  const showEditModalHandler = (post) => {
    setItemToBeEdited(post);
    showEdit(true);
  };

  const hideEditModalHandler = () => showEdit(false);
  return (
    <Container flex="column" padding="1rem 0 0 0.2rem" width="100%">
      <Container justify="flex-end" padding="0.8rem">
        <Button
          text="Add Videos"
          color="#D1BB71"
          back={"black"}
          width="10rem"
          height="2.5rem"
          borderRadius="5px"
          font="18px"
          margin="0 0 1rem 0"
          click={showModalHandler}
        />
      </Container>
      {modal && <AddVideo onHide={hideModalHandler} />}
      {/* {editForm && (
        <EditPosts data={itemToBeEdited} onHide={hideEditModalHandler} />
      )} */}
      {data.map((d) => (
        <div key={d._id} className="view-stories-container">
          <p style={{ width: "80%", fontSize: "18px", fontWeight: 600 }}>
            ★ {d.title}
          </p>
          <div style={{ width: "20%" }}>
            <Button
              text="Edit"
              back="white"
              color="yellowgreen"
              borderRadius={"5px"}
              margin={"0 0.2rem 0 0"}
              width="4rem"
              font="18px"
              click={() => showEditModalHandler(d)}
            />
            <Button
              text="Delete"
              back="white"
              color="red"
              borderRadius={"5px"}
              width="4rem"
              font="18px"
            />
          </div>
        </div>
      ))}
    </Container>
  );
};

export default ManageVideos;
