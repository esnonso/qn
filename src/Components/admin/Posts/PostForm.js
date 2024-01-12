import { useState, useContext } from "react";
import "../index.css";
import { H1Tags } from "../../Text";
import Button from "../../Button";
import Container from "../../Containers/container";
import { AuthContext } from "../../Context/auth";

const PostForm = (props) => {
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [trending, setTrending] = useState("No");
  const [image, setImage] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const authCtx = useContext(AuthContext);

  const inputChangeHandler = (setState) => (e) => {
    setState(e.target.value);
  };

  const imageChangeHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    setError("");
    setMessage("");
    e.preventDefault();

    setPending(true);
    let formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("topic", topic);
    formData.append("body", body);
    formData.append("trending", trending);

    try {
      const response = await fetch("http://localhost:5002/api/stories", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authCtx.token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      setPending(false);
      setMessage("Post submitted successfully!");
      window.location.reload();
    } catch (err) {
      setError(err.message);
      setPending(false);
    }
  };

  return (
    <form
      className="post-form-container"
      onSubmit={submitHandler}
      encType="multipart/form-data"
    >
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
        Add Posts
      </H1Tags>

      <div className="form-control-post">
        {error && <small className="error">{error}</small>}
        {message && <small className="success">{message}</small>}
        <label>Topic</label>
        <select
          name="topic"
          value={topic}
          onChange={inputChangeHandler(setTopic)}
        >
          <option>Select</option>
          <option>Legal Education</option>
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
        <label>Description</label>
        <textarea
          type="text"
          name="body"
          value={body}
          onChange={inputChangeHandler(setBody)}
        ></textarea>
      </div>

      <div className="form-control-post" style={{ height: '100px', overflowY: 'auto' }}>
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
        <label>Image</label>
        <div className="image-container">
          <input
            type="file"
            name="image"
            id="image"
            defaultValue={image}
            onChange={imageChangeHandler}
          />
        </div>
      </div>

      <div className="form-control-post">
        <button type="submit" disabled={pending} className="submit-btn">
          {pending ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
