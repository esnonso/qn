import { useState } from "react";
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
      {/* {logo !== "" && <h1>{logo}</h1>} */}
      {image !== "" && (
        <img src={require("../../Images/logo.png")} alt="" className="logo" />
      )}
      <div
        style={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
      >
        <button className="hamburger" onClick={showSideBarHandler}>
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
