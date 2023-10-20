import { Form } from "react-router-dom";
import "../index.css";
import { H1Tags } from "../../Text";
import Button from "../../Button";
import Container from "../../Containers/container";

const VideoForm = (props) => {
  return (
    <Form className="post-form-container" method="POST">
      <Container justify="flex-end">
        <Button
          text="X"
          color="red"
          back={"inherit"}
          width="10rem"
          height="3rem"
          borderRadius="5px"
          font="larger"
          type="button"
          click={props.onClose}
        />
      </Container>
      <H1Tags textAlign="center" margin="0.2rem 0" fontSize="20px">
        Add Video
      </H1Tags>
      <div className="form-control-post">
        <label>Topic</label>
        <select name="topic">
          <option>Poetry</option>
          <option>Video</option>
          <option>Movie</option>
        </select>
      </div>

      <div className="form-control-post">
        <label>Title</label>
        <input type="text" name="title" />
      </div>

      <div className="form-control-post">
        <label>Video Link</label>
        <input type="text" name="videoUrl" />
      </div>

      <div className="form-control-post">
        <Button
          text="Add"
          color="#D1BB71"
          back={"black"}
          width="10rem"
          height="3rem"
          borderRadius="5px"
          font="large"
          type="submit"
        />
      </div>
    </Form>
  );
};

export default VideoForm;
