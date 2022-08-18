import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="erro-page section">
      <h2>its a dead end</h2>
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
    </section>
  );
};

export default Error;
