import React, {useState } from 'react';
import axios from 'axios';

const Register = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [role, setRole] = useState("0");
    let [password, setPassword] = useState("");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      await axios
        .post("http://localhost:5000/users", {
          name: name,
          email: email,
          role: role,
          password: password,
        })
        .then((res) => {
          console.log(res);
          setName("");
          setEmail("");
          setRole("");
          setPassword("");
        })
        .catch((err) => console.log(err));
    };
  
    return (
      <div>
        <header>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <label>
              name:{" "}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />{" "}
            </label>
            <br />
            <label>
              email:{" "}
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />{" "}
            </label>
            <br />
            <label>
              Role:{" "}
              {
                //remember to parse integer when submitting to the state
              }
              <select
                onChange={(e) => setRole(parseInt(e.target.value))}
                value={role}
              >
                <option value="0">Select</option>
                <option value="1">Admin</option>
                <option value="2">Moderator</option>
                <option value="3">Reviewer</option>
              </select>
            </label>
            <br />
            <label>
              password:{" "}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
            </label>{" "}
            <br />
            <input type="submit" value="Register" />
          </form>
        </header>
      </div>
    );
  }

export default Register;