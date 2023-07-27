import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Home Screen</h1>
      <div className="d-grid gap-3 col-md-6 mx-auto">
        <Link to="/preview">
          <button className="btn btn-primary" type="button">
            Preview Form
          </button>
        </Link>
        <Link to="/fill">
          <button className="btn btn-success" type="button">
            Fill Form
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
