import React from "react";
import { useRef } from "react";
import "./style.css";

export const Login = ({ setTek }) => {
  const nameRef = useRef();
  const passwordRef = useRef();
  let ism = "user";
  let kod = 1234;
  const kirish = (evt) => {
    evt.preventDefault();
    if (nameRef.current.value == ism || passwordRef.current.value == kod) {
      setTek(true);
    }
  };
  return (
    <div className="loginDiv">
      <form onSubmit={kirish}>
        <h2>Kirish</h2>
        <div>
          <input
            className="input"
            ref={nameRef}
            type="text"
            placeholder="Admin name"
            name="adminName"
            required
          />
          <input
            className="input"
            ref={passwordRef}
            type="password"
            placeholder="Admin Password"
            name="adminPassword"
            required
          />
          <button className="postBtn loginBtn" type="submit">
            Kirish
          </button>
        </div>
      </form>
    </div>
  );
};
