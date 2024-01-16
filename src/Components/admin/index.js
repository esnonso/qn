import { useEffect, useContext, useState } from "react";
import Container from "../Containers/container";
import Header from "../Header";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/auth";
import "./index.css";

const AdminPortal = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, loadingComplete] = useState(false);
  const [name, setName] = useState("");

  const checkIfIsAdmin = async () => {
    try {
      const res = await fetch("https://qnlegal-api-henrys.onrender.com/api/profile", {
        headers: {
          Authorization: `Bearer ${authCtx.token}`,
        },
      });
      if (!res.ok) {
        throw new Error("An error occured!");
      }
      return res.json();
    } catch (err) {
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    checkIfIsAdmin().then((data) => {
      if (data.role !== "Administrator" && data.role !== "admin")
        navigate("/", { replace: true });
      else if (data.role === "Administrator" || data.role === "admin")
        loadingComplete(true);
      setName(data.name);
    });
  },);
  return (
    <>
      <Header color="black" />
      {!loading && (
        <div className="loader-container">
          <span className="loader"></span>
          <p style={{ width: "fit-content", fontSize: "larger" }}>
            Confirming admin status
          </p>
        </div>
      )}
      <Container width="100%" height="110vh">
        <Container width="25%" color="black" height="100%" textColor="white">
          <ul style={{ marginTop: '50px' }} className="nav-admin">
          <Link to="posts">
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
        <Container width="75%" flex="column">
          <p
            style={{
              textAlign: "center",
              fontSize: "larger",
              margin: "0.5rem",
            }}
          >
            Welcome {name}!
          </p>
          <Outlet />
        </Container>
      </Container>
    </>
  );
};

export default AdminPortal;
