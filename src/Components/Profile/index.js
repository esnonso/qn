import { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Replace useHistory with useNavigate
import Container from "../Containers/container";
import Header from "../Header";
import { AuthContext } from "../Context/auth";
import { PTags } from "../Text";
import Image from "../../Images/default-profile.png";
import './profile.css'

export default function UserProfile() {
  const [user, setUser] = useState({});
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate(); 

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

  const handleLogout = () => {
    
    authCtx.logout(); 
    navigate("/home"); 
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const imgStyles = { height: "5rem", width: "5rem" };

  return (
    <Container flex="column" width="100%">
      <Header color={"black"} />
      <Container width="100%" flex="column" padding="1rem">
        <img src={Image} alt="default-profile" style={imgStyles} />
        <PTags>Name: {user.name}</PTags>
        <PTags>Email: {user.email}</PTags>
        <PTags>Joined: {user.joined}</PTags>
        {user.role === "admin" ||
          (user.role === "Administrator" && (
            <Link to="/dashboard">Admin Dashboard</Link>
          ))}
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </Container>
    </Container>
  );
}
