import React from "react";
import { Link } from "react-router-dom";

import './hello.css'
const Hello = ({ user }) => {
  return (
    <div className="landing">
      <h1 className="landing__header"> Hello, {user}.</h1>
      <Link to="/aleph-react-test" className="landing__link">React Test</Link>
    </div>
  );
};

export default Hello;
