import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNavigation from "../MobileNavigator";
import Image from "../../Images/profile.png";
import "./index.css";

const Posts = ({ textColor, list, color, position, image }) => {
  const [sidebar, showSideBar] = useState(false);

  const showSideBarHandler = () => showSideBar((prevState) => !prevState);
  const headerStyles = {
    backgroundColor: color,
    position: position,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      {/* {logo !== "" && <h1>{logo}</h1>} */}
      {image !== "" && (
        <img src={require("../../Images/logo.png")} alt="" className="logo" />
      )}
      <div
        style={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
      >
        <ul>
          {list.map((l, i) => (
            <li key={`a${i}`}>
              <Link to={`/${l.toLowerCase()}`} style={{ color: textColor }}>
                {l}
              </Link>
            </li>
          ))}
        </ul>

        <div className="dropdown">
          <img src={Image} alt="" className="profile" />
          <div className="dropdown-content">
            <a href="/">Login</a>
            <a href="/">Profile</a>
          </div>
        </div>
        <button className="hamburger" onClick={showSideBarHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <MobileNavigation list={list} sidebar={sidebar} />
    </header>
  );
};

export default Posts;
