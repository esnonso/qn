import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { NavItems } from "../../Objects";
import "./index.css";

const BackDrop = () => {
  return <div className="backdrop"></div>;
};

export const BackDropPortal = () => {
  return createPortal(<BackDrop />, document.getElementById("overlays"));
};

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <button className="close-nav-btn" onClick={props.onClose}>
        X
      </button>
      {NavItems.map((l, i) => (
        <li key={`b${i}`}>
          <Link to={`/${l.replace(/\s/g, "").toLowerCase()}`}>
            {l.trim().toUpperCase()}
          </Link>
        </li>
      ))}
    </div>
  );
};

const SideBarPortal = (props) => {
  return createPortal(
    <Sidebar onClose={props.onClose} />,
    document.getElementById("overlays")
  );
};

const MobileNavigation = (props) => {
  return (
    <>
      {props.sidebar && (
        <>
          <BackDropPortal />
          <SideBarPortal list={props.list} onClose={props.onClose} />
        </>
      )}
    </>
  );
};

export default MobileNavigation;
