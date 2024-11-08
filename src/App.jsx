import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import WhyChooseUs from "./WhyChooseUs";
import Certified from "./Cerfied.jsx";
import Course from "./Course.jsx";
import Parentsay from "./Parentsay";
import Testimoni from "./Testimoni";
import Contact from "./Contact";
import Footer from "./Footer";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Dashboard from "./Dashboard.jsx";

import "./App.css";

function LandingPage() {
  return (
    <>
      <Nav />
      <Hero />
      <WhyChooseUs />
      <Certified />
      <Course />
      <Parentsay />
      <Testimoni />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
