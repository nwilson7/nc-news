import { useState } from "react";
import { useUser } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [username, setUsername] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    sessionStorage.setItem("username", username);

    login(username);
    navigate("/home");
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          id="Username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="Username"></label>
        <button type="submit">Log in</button>
      </form>
    </>
  );
}

export default Signin;
