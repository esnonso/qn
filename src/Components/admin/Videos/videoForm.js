import { useState, useContext } from "react";
import "../index.css";
import { H1Tags } from "../../Text";
import Button from "../../Button";
import Container from "../../Containers/container";
import { AuthContext } from "../../Context/auth";

const VideoForm = (props) => {
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const authCtx = useContext(AuthContext);

  const inputChangeHandler = (setState) => (e) => {
    setState(e.target.value);
  };

  const videoChangeHandler = (e) => {
    setVideo(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setPending(true);

    let formData = new FormData();
    formData.append("video", video);
    formData.append("title", title);
    formData.append("topic", topic);

    try {
      const response = await fetch("http://localhost:5002/api/videos", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${authCtx.token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      setPending(false);
      setMessage("Video submitted successfully!");
      window.location.reload();
    } catch (err) {
      setError(err.message);
      setPending(false);
    }
  };

  return (
    <form
      className="post-form-container"
      method="POST"
      encType="multipart/form-data"
      onSubmit={submitHandler}
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
        Add Video
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
          <option>LegaL Education</option>
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
        <label>Video</label>
        <input
          type="file"
          name="video"
          onChange={videoChangeHandler}
        />
      </div>

      <div className="form-control-post">
        <button type="submit" disabled={pending} className="submit-btn">
          {pending ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default VideoForm;
