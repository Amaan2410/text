import "./App.css";
import Home from "./components/Home";
import Certificates from "./components/Certificates";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </Router>
    </>
  );
}
