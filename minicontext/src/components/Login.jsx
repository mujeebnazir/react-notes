import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [usernanme, setUsernanme] = useState("");
  const [password, setPassword] = useState("");

  //step3 : how to send the data to state of context object
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ usernanme, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={usernanme}
        onChange={(e) => setUsernanme(e.target.value)}
        placeholder="username"
      />
      ;{"  "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      ;<button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
