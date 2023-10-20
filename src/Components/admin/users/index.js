import { useState } from "react";
import Button from "../../Button";
import Container from "../../Containers/container";
import CreateUser from "./create";

const ViewUsers = () => {
  const [modal, showModal] = useState(false);
  const showModalHandler = () => showModal((prevState) => !prevState);
  const hideModalHandler = () => showModal(false);
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
    </Container>
  );
};

export default ViewUsers;
