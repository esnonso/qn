import { useState, useEffect } from "react";
import { fetchPosts } from "../../apiHandlers";
import Container from "../../Containers/container";
import AddPosts from "./addPosts";
import EditPosts from "./EditPost";
import Button from "../../Button";
import Modal from "../../Modal";
import { PTags } from "../../Text";
import ErrorModal from "../../Error/errorModal";
import { paginate } from "../../Functions";
import "../index.css";

const CreatePosts = () => {
  const [addNewPost, showAddNewPostForm] = useState(false);
  const [editForm, showEdit] = useState(false);
  const [itemToBeEdited, setItemToBeEdited] = useState("");
  const [batch, setBatch] = useState([]);
  const [page, setPage] = useState(0);
  const [deleteWarning, ShowDeleteWarning] = useState(false);
  const [actionWarning, ShowActionWarning] = useState(false);
  const [idTobeDeleted, setIdToBeDeleted] = useState(false);
  const [error, showError] = useState("");

  const putPostsInBatches = async () => {
    const data = await fetchPosts();
    setBatch(paginate(data));
  };

  useEffect(() => {
    putPostsInBatches();
  }, []);

  const showaddNewPostHandler = () => showAddNewPostForm(true);
  const hideaddNewPostHandler = () => showAddNewPostForm(false);
  const hideEditModalHandler = () => showEdit(false);
  const showEditModalHandler = (post) => {
    setItemToBeEdited(post);
    showEdit(true);
  };
  const hideErrorWarningHandler = () => {
    showError("");
  };
  const showDeleteHandler = (id) => {
    setIdToBeDeleted(id);
    ShowDeleteWarning(true);
  };

  const hideDeleteHandler = () => ShowDeleteWarning(false);

  const deleteProductHandler = async (id) => {
    try {
      const response = await fetch("http://localhost:5002/api/stories/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      ShowDeleteWarning(false);
      if (!response.ok) throw new Error("Could not delete, An error occured!");
      ShowActionWarning(true);
    } catch (err) {
      showError(err.message);
    }
  };

  const hideActionWarningHandler = () => {
    ShowActionWarning(false);
    window.location.reload();
  };

  const decreasePageHandler = () => {
    if (page === 0) return;
    setPage((prevState) => prevState - 1);
  };
  const increasePageHandler = () => {
    if (page === batch.length - 1) return;
    setPage((prevState) => prevState + 1);
  };
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
          margin="0 0 0.5rem 0"
          click={showaddNewPostHandler}
        />
      </Container>
      {addNewPost && <AddPosts onHide={hideaddNewPostHandler} />}
      {editForm && (
        <EditPosts data={itemToBeEdited} onHide={hideEditModalHandler} />
      )}
      {batch.length > 0 &&
        batch[page].map((d, i) => (
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
                click={() => showDeleteHandler(d._id)}
              />
            </div>
          </div>
        ))}
      <Container width="100%" justify="center">
        <Button
          text="Previous"
          back="black"
          color="#D1BB71"
          font="large"
          borderRadius={"5px"}
          margin={"0 0.2rem 0 0"}
          width="6rem"
          click={decreasePageHandler}
        />
        {batch.map((b, i) => (
          <Button
            text={i + 1}
            key={i}
            back="black"
            color="#D1BB71"
            font="large"
            borderRadius={"5px"}
            margin={"0 0.2rem 0 0"}
          />
        ))}
        <Button
          text="Next"
          back="black"
          color="#D1BB71"
          font="large"
          borderRadius={"5px"}
          margin={"0 0.2rem 0 0"}
          width="6rem"
          click={increasePageHandler}
        />
      </Container>

      {deleteWarning && (
        <Modal>
          <Container width="100%" padding="0.5rem" align="center" height="100%">
            <PTags width="70%" fontSize="18px">
              Do you want to delete ?
            </PTags>
            <Container width="30%" justify="space-around">
              <Button
                text="Yes"
                font="18px"
                back="white"
                color="green"
                click={() => deleteProductHandler(idTobeDeleted)}
              />
              <Button
                text="No"
                font="18px"
                back="white"
                color="gray"
                click={hideDeleteHandler}
              />
            </Container>
          </Container>
        </Modal>
      )}

      {actionWarning && (
        <Modal>
          <Container width="100%" padding="1rem" align="center" height="100%">
            <PTags width="70%" fontSize="18px">
              Success! Post deleted!
            </PTags>
            <Container width="30%" justify="space-around">
              <Button
                text="Close"
                font="18px"
                back="white"
                color="green"
                click={hideActionWarningHandler}
              />
            </Container>
          </Container>
        </Modal>
      )}

      {error && (
        <ErrorModal click={hideErrorWarningHandler}>{error}</ErrorModal>
      )}
    </Container>
  );
};

export default CreatePosts;
