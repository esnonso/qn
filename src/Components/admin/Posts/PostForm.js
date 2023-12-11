import { useState } from "react";
import "../index.css";
import { H1Tags } from "../../Text";
import Button from "../../Button";
import Container from "../../Containers/container";

const PostForm = (props) => {
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [pending, setPending] = useState(false);

  const inputChangeHandler = (setState) => (e) => {
    setState(e.target.value);
  };

  const imageChangeHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // var imagedata = document.querySelector('input[type="file"]').files[0];
    // console.log(imagedata);
    setPending(true);
    let formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("topic", topic);
    formData.append("body", body);
    try {
      const response = await fetch("http://localhost:5002/api/stories", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
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
        <label>Topic</label>
        <select
          name="topic"
          value={topic}
          onChange={inputChangeHandler(setTopic)}
        >
          <option>Select</option>
          <option>Poetry</option>
          <option>Action</option>
          <option>Fiction</option>
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

      <div className="form-control-post">
        <label>Image</label>
        <input
          type="file"
          name="image"
          id="image"
          defaultValue={image}
          onChange={imageChangeHandler}
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

export default PostForm;
