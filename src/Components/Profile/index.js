import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Containers/container";
import Header from "../Header";
import { AuthContext } from "../Context/auth";
import { PTags } from "../Text";
import Image from "../../Images/default-profile.png";

export default function UserProfile() {
  const [user, setUser] = useState({});
  const authCtx = useContext(AuthContext);
  const fetchUserProfile = async () => {
    try {
      const res = await fetch("http://localhost:5002/api/profile", {
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
      </Container>
    </Container>
  );
}
