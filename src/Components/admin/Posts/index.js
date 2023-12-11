import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../Containers/container";
import AddPosts from "./addPosts";
import EditPosts from "./EditPost";
import Button from "../../Button";
import "../index.css";

const CreatePosts = () => {
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
          text="Add Posts"
          color="#D1BB71"
          back={"black"}
          width="10rem"
          height="3rem"
          borderRadius="5px"
          font="larger"
          margin="0 0 1rem 0"
          click={showModalHandler}
        />
      </Container>
      {modal && <AddPosts onHide={hideModalHandler} />}
      {editForm && (
        <EditPosts data={itemToBeEdited} onHide={hideEditModalHandler} />
      )}
      {data.map((d, i) => (
        <div key={d._id} className="view-stories-container">
          <p style={{ width: "80%", fontSize: "18px", fontWeight: 600 }}>
            ★ {d.title}
          </p>
          <div style={{ width: "20%" }}>
            <Button
              text="Edit"
              back="white"
              color="yellowgreen"
              font="18px"
              borderRadius={"5px"}
              margin={"0 0.2rem 0 0"}
              width="4rem"
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

export default CreatePosts;
