import React, { useCallback, useEffect, useState } from "react";
import {
  useParams,
  Form,
  useActionData,
  useNavigation,
} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "./singlepost.css";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const params = useParams();
  const data = useActionData();
  const navigation = useNavigation();
  const isSumbmitting = navigation.state === "submitting";

  const fetchSinglePost = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:5002/api/stories/" + params.id);
      if (!res.ok) {
        const re = await res.json();
        throw new Error(re.message);
      }
      const data = await res.json();
      setPost(data);
    } catch (err) {
      console.log(err);
    }
  }, [params.id]);

  useEffect(() => {
    fetchSinglePost();
  }, [fetchSinglePost]);

  return (
    <>
      <Header color="black" />
      <div className="page-wrapper">
        <div className="content clearfix">
          <div className="main-content-wrapper">
            <div className="main-content single">
              <h1 className="post-title">{post.title}</h1>
              <div className="post-content">{post.body}</div>
            </div>
          </div>
        </div>

        <div className="comment-section">
          <h3>Comments</h3>
          <div className="comments-list">
            {post &&
              post.comment &&
              post.comment.map((p, i) => <p key={i}>{p.comment}</p>)}
          </div>
          {data && data.error && (
            <small style={{ color: "red" }}>Error: {data.message}</small>
          )}
          {data && !data.error && (
            <small style={{ color: "green" }}>Sucess: {data.message}</small>
          )}
          <Form method="POST" className="comment-input">
            <input
              type="text"
              name="id"
              value={params.id}
              style={{ display: "none" }}
              readOnly
            />
            <input type="text" placeholder="Add a comment..." name="comment" />
            <button
              type="submit"
              disabled={isSumbmitting}
              className="submit-btn"
            >
              {isSumbmitting ? "..." : "Submit"}
            </button>
          </Form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SinglePost;
