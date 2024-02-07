import { useState } from "react";
import { Link } from "react-router-dom"; 
import MobileNavigation from "../MobileNavigator";
import "./index.css";

const Header = ({ textColor, list, color, position, image }) => {
  const [sidebar, showSideBar] = useState(false);

  const showSideBarHandler = () => showSideBar((prevState) => !prevState);

  const hideSideBarHandler = () => showSideBar(false);
  const headerStyles = {
    backgroundColor: color,
    position: position,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      {/* Make the logo clickable and navigate to the home page */}
      {image !== "" && (
        <Link to="/">
          <img src={require("../../Images/logo.png")} alt="" className="logo" />
        </Link>
      )}
      <div className="hamburger-container" onClick={showSideBarHandler}>
        <button className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <MobileNavigation sidebar={sidebar} onClose={hideSideBarHandler} />
    </header>
  );
};

export default Header;
