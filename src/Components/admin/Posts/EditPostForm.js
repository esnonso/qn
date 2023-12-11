import { useState } from "react";
import { Form } from "react-router-dom";
import "../index.css";
import { H1Tags } from "../../Text";
import Button from "../../Button";
import Container from "../../Containers/container";

const EditPostForm = (props) => {
  const [topic, setTopic] = useState(props.data.topic);
  const [title, setTitle] = useState(props.data.title);
  const [body, setBody] = useState(props.data.slug);

  const handleChange = (setState) => (e) => {
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
          click={props.onClose}
        />
      </Container>
      <H1Tags textAlign="center" margin="0.2rem 0" fontSize="20px">
        Edit {title}
      </H1Tags>
      <div className="form-control-post">
        <label>ID</label>
        <input type="text" name="id" value={props.data._id} readOnly />
      </div>
      <div className="form-control-post">
        <label>Topic</label>
        <select name="topic" value={topic} onChange={handleChange(setTopic)}>
          <option>Poetry</option>
          <option>Video</option>
          <option>Movie</option>
        </select>
      </div>

      <div className="form-control-post">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange(setTitle)}
        />
      </div>

      {/* <div className="form-control-post">
        <label>Image url</label>
        <input
          type="text"
          name="imgUrl"
          value={imgUrl}
          onChange={handleChange(setImgUrl)}
        />
      </div> */}

      <div className="form-control-post">
        <label>Description</label>
        <textarea
          type="text"
          name="body"
          value={body}
          onChange={handleChange(setBody)}
        ></textarea>
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

export default EditPostForm;
