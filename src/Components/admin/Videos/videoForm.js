import { useState } from "react";
import "../index.css";
import { H1Tags } from "../../Text";
import Button from "../../Button";
import Container from "../../Containers/container";

const VideoForm = (props) => {
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState("");
  const [pending, setPending] = useState(false);

  const inputChangeHandler = (setState) => (e) => {
    setState(e.target.value);
  };

  const videoChangeHandler = (e) => {
    setVideo(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setPending(true);
    let formData = new FormData();
    formData.append("video", video);
    formData.append("title", title);
    formData.append("topic", topic);

    try {
      const response = await fetch("http://localhost:5002/api/videos", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("An error occured try again");
      alert("success");
      setPending(false);
      return "Post created sucessfully";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="post-form-container"
      method="POST"
      encType="multipart-formdata"
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
        <label>Video</label>
        <input
          type="file"
          name="video"
          defaultValue={video}
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
