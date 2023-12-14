import { useState, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Button from "../../Button";
import Container from "../../Containers/container";
import CreateUser from "./create";
import { AuthContext } from "../../Context/auth";
import { PTags } from "../../Text";
import Modal from "../../Modal";
import ErrorModal from "../../Error/errorModal";

const ViewUsers = () => {
  const data = useLoaderData();
  const [modal, showModal] = useState(false);
  const [deleteWarning, ShowDeleteWarning] = useState(false);
  const [actionWarning, ShowActionWarning] = useState(false);
  const [idTobeDeleted, setIdToBeDeleted] = useState(false);
  const [error, showError] = useState("");
  const authCtx = useContext(AuthContext);

  const showModalHandler = () => showModal((prevState) => !prevState);
  const hideModalHandler = () => showModal(false);
  const showDeleteHandler = (id) => {
    setIdToBeDeleted(id);
    ShowDeleteWarning(true);
  };

  const hideDeleteHandler = () => ShowDeleteWarning(false);

  const deleteUserHandler = async (id) => {
    try {
      const response = await fetch("http://localhost:5002/api/admins/" + id, {
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

  const hideErrorWarningHandler = () => {
    showError("");
  };

  return (
    <Container flex="column" padding="1rem 0 0 1rem">
      <Button
        text="New User"
        color="#D1BB71"
        back={"black"}
        width="10rem"
        height="3rem"
        borderRadius="5px"
        font="larger"
        click={showModalHandler}
      />
      {modal && <CreateUser onClose={hideModalHandler} />}
      {data.admins.map((d) => {
        return (
          <Container key={d._id} justify="space-between">
            <p className="stories-p">★ {d.name}</p>
            <p className="stories-p">{d.role}</p>
            <PTags>
              <Button
                text="Delete"
                back="white"
                color="red"
                borderRadius={"5px"}
                width="4rem"
                font="18px"
                click={() => showDeleteHandler(d._id)}
              />
            </PTags>
          </Container>
        );
      })}

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
                click={() => deleteUserHandler(idTobeDeleted)}
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
              Success! Admin deleted!
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

export default ViewUsers;
