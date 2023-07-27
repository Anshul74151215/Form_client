import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import PreviewForm from "./PreviewForm";
import FillForm from "./FillForm";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link className="btn btn-primary" to="/">
                Home
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<PreviewForm />} />
          <Route path="/fill" element={<FillForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
