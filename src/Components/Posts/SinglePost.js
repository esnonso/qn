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
import Image from "../../Images/default-profile.png";

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

  const handleFacebookShare = () => {
 
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${post.title} - ${post.body}`)}`;
    window.open(url, '_blank');
  };
  
  const handleTwitterShare = () => {
  
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`${post.title} - ${post.body}`)}`;
    window.open(url, '_blank');
  };
  

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

        <div style={{ marginLeft: "52px" }} className="comment-section">
          <h3>{`Comments (${post.comment ? post.comment.length : 0})`}</h3>
          <div className="comments-list">
            {post &&
              post.comment &&
              post.comment.map((p, i) => (
                <div key={i} className="comment-container">
                
                  <img
                    src={p.createdBy.profileImage || Image}
                    alt="Profile"
                    className="profile"
                  />
                  <p className="commented">{p.comment}</p>
                </div>
              ))}
          </div>

          {data && data.error && (
            <small style={{ color: "red" }}>Error: {data.message}</small>
          )}
          {data && !data.error && (
            <small style={{ color: "green" }}>Success: {data.message}</small>
          )}
          <div className="social-share-buttons">
            <button onClick={handleFacebookShare} className="social-share-button facebook-share-button">Share on Facebook</button>
            <button onClick={handleTwitterShare} className="social-share-button facebook-share-button">Share on Twitter</button>
          </div>

          <Form method="POST" className="comment-input">
            <input
              type="text"
              name="id"
              value={params.id}
              style={{ display: "none" }}
              readOnly
            />
         
            <textarea className="textarea" rows="4" type="text" placeholder="Write a comment..." name="comment"    >

            </textarea>
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
