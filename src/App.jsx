import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/home";
import About from "./About/about";
import "./App.css";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";
import Schedule from "./Schedule/schedule";
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/schedule">Schedule</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />;
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
