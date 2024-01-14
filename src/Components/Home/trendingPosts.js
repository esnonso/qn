import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/auth";
import { useScreenSize } from "../Hooks/useScreenSize";
import './trendingpost.css';


const PrintTrendingPosts = ({ posts }) => {
  const [count, setCount] = useState(0);
  const [screenSize, setScreenSize] = useScreenSize();
  const [chunkSize, setChunkSize] = useState(3);

  useEffect(() => {
    if (screenSize <= 700) {
      setChunkSize(3);
    } else if (screenSize > 700 && screenSize <= 1016) {
      setChunkSize(6);
    } else {
      setChunkSize(9);
    }
  }, [screenSize]);

  const increaseCountHandler = () => {
    if (count < Math.floor(posts.length / chunkSize) - 1) {
      setCount((prevState) => prevState + 1);
    }
  };

  const decreaseCountHandler = () => {
    if (count > 0) {
      setCount((prevState) => prevState - 1);
    }
  };

  const [user, setUser] = useState({});
  const authCtx = useContext(AuthContext);

  const fetchUserProfile = async () => {
    try {
      const res = await fetch("https://qnlegal-api-henry.onrender.com/api/profile", {
        headers: {
          Authorization: `Bearer ${authCtx.token}`,
        },
      });
      if (!res.ok) {
        const re = await res.json();
        throw new Error(re.message);
      }
      const data = await res.json();
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "30px", margin: "1rem" }}>
        Trending Posts
      </h1>

      <div className="trending-post">
        {posts &&
          posts.length > 0 &&
          posts
            .slice(count * chunkSize, (count + 1) * chunkSize)
            .map((item) => (
              <div className="post-container" key={item._id}>
                <img
                  src={item.imageUrl}
                  className="image-post"
                  alt=""
                />
                <div className="link-wrapper">
                  <Link className="post-link" to={`/post/${item._id}`} >
                    {item.title}
                  </Link>
                </div>
                <div className="flex-profile">
                    <div className="profile-info">
                      <img
                        src={require("../../Images/profile.png")}
                        alt="Profile"
                        className="profile"
                      />
                      <span className="username">{user.name}</span>
                    </div>
  {/* <div className="calendar-info">
    <img
      src={require("../../Images/calender.png")}
      alt="Calendar"
      className="calendar"
    />
    <span>{item.createdAt}</span>
  </div> */}
</div>

                
                
              </div>
            ))}
      </div>
    </>
  );
};

export default PrintTrendingPosts;
