import { useState, useEffect, useContext } from "react";
import Container from "../../Containers/container";
import AddVideo from "./addVideos";
import Button from "../../Button";
import { fetchVideos } from "../../apiHandlers";
import Modal from "../../Modal";
import { PTags } from "../../Text";
import ErrorModal from "../../Error/errorModal";
import { paginate } from "../../Functions";
import EditVideoForm from "./EditVideoForm";
import { AuthContext } from "../../Context/auth";
import "../index.css";

const ManageVideos = () => {
  const authCtx = useContext(AuthContext);
  const [addNewVideo, showAddNewPostForm] = useState(false);
  const [editForm, showEdit] = useState(false);
  const [itemToBeEdited, setItemToBeEdited] = useState("");
  const [batch, setBatch] = useState([]);
  const [page, setPage] = useState(0);
  const [deleteWarning, ShowDeleteWarning] = useState(false);
  const [actionWarning, ShowActionWarning] = useState(false);
  const [idTobeDeleted, setIdToBeDeleted] = useState(false);
  const [error, showError] = useState("");

  const putVideosInBatches = async () => {
    const data = await fetchVideos();
    setBatch(paginate(data));
  };

  useEffect(() => {
    putVideosInBatches();
  }, []);

  const showAddNewVideoHandler = () => showAddNewPostForm(true);
  const hideAddNewVideoHandler = () => showAddNewPostForm(false);
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
      const response = await fetch("https://qnlegal-api-henrys.onrender.com/api/videos/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authCtx.token}`,
        },
      });
      ShowDeleteWarning(false);
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message);
      }
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
    <Container flex="column" padding="0.5rem 0 0 0.2rem" width="100%">
      <Container justify="flex-end" padding="0.8rem">
        <Button
          text="Add Videos"
          color="#D1BB71"
          back={"black"}
          width="10rem"
          height="2.5rem"
          borderRadius="5px"
          font="18px"
          margin="0 0 0.5rem 0"
          click={showAddNewVideoHandler}
        />
      </Container>
      {addNewVideo && (
        <AddVideo onHide={hideAddNewVideoHandler} data={"ahahha"} />
      )}
      {editForm && (
        <EditVideoForm data={itemToBeEdited} onHide={hideEditModalHandler} />
      )}
      {batch.length > 0 &&
        batch[page].map((d) => (
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
                click={() => {
                  showDeleteHandler(d._id);
                }}
              />
            </div>
          </div>
        ))}
      <Container width="100%" justify="center">
        <Button
          text="Previous"
          back="black"
          color="#D1BB71"
          borderRadius={"3px"}
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
            borderRadius={"3px"}
            margin={"0 0.2rem 0 0"}
          />
        ))}
        <Button
          text="Next"
          back="black"
          color="#D1BB71"
          borderRadius={"3px"}
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

export default ManageVideos;
