import Container from "../Containers/container";
import Header from "../Header";
import { Link, Outlet } from "react-router-dom";
import "./index.css";

const AdminPortal = () => {
  return (
    <>
      <Header color="black" />
      <Container width="100%">
        <Container width="25%" color="black" height="90vh" textColor="white">
          <ul className="nav-admin">
            <Link to="/dashboard">
              <li>Manage Posts</li>
            </Link>
            <Link to="videos">
              <li>Manage Videos</li>
            </Link>
            <Link to="users">
              <li>Manage Users</li>
            </Link>
          </ul>
        </Container>
        <Container width="75%">
          <Outlet />
        </Container>
      </Container>
    </>
  );
};

export default AdminPortal;
