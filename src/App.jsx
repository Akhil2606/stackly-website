import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<NotFound />} />
        <Route path="/about" element={<NotFound />} />
        <Route path="/products" element={<NotFound />} />
        <Route path="/services" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="footer">
        <Link to="/contact" className="footer-logo">
          stackly<span className="logo-dot">.</span>
        </Link>
        <span>Ideas. Innovation. Impact. &nbsp; © 2026 Stackly.</span>
      </footer>
    </>
  );
}

export default App;