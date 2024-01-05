import { useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import "../index.css";
import { H1Tags } from "../../Text";
import Button from "../../Button";
import Container from "../../Containers/container";

const EditVideoForm = (props) => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSumbmitting = navigation.state === "submitting";
  const [topic, setTopic] = useState(props.data.topic);
  const [title, setTitle] = useState(props.data.title);
  const [trending, setTrending] = useState(props.data.trending);

  const inputChangeHandler = (setState) => (e) => {
    setState(e.target.value);
  };

  return (
    <Form className="post-form-container" method="PUT">
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
          click={props.onHide}
        />
      </Container>
      <H1Tags textAlign="center" margin="0.2rem 0" fontSize="20px">
        Add Video
      </H1Tags>
      <div className="form-control-post">
        {data && data.error && (
          <small style={{ color: "red" }}>Error: {data.message}</small>
        )}
        {data && !data.error && (
          <small style={{ color: "green" }}>Sucess: {data}</small>
        )}
        <label>ID</label>
        <input type="text" name="id" value={props.data._id} readOnly />
        <label>Topic</label>
        <select
          name="topic"
          value={topic}
          onChange={inputChangeHandler(setTopic)}
        >
          <option>--Select--</option>
          <option>News</option>
          <option>Health</option>
          <option>Technology</option>
        </select>
      </div>

      <div className="form-control-post">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={inputChangeHandler(setTitle)}
        />
      </div>

      <div className="form-control-post">
        <label>Make trending</label>
        <select
          name="trending"
          value={trending}
          onChange={inputChangeHandler(setTrending)}
        >
          <option>No</option>
          <option>Yes</option>
        </select>
      </div>

      <div className="form-control-post">
        <button type="submit" disabled={isSumbmitting} className="submit-btn">
          {isSumbmitting ? "..." : "Submit"}
        </button>
      </div>
    </Form>
  );
};

export default EditVideoForm;
