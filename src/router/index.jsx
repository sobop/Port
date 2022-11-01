import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MorePage from "../pages/MorePage";

export default function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more" element={<MorePage />} />
      </Routes>
    </Router>
  );
}
