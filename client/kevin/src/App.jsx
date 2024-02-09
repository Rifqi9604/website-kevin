import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Form from "./pages/Form";
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <div data-theme="winter" className=" font-poppins scroll-smooth">
      <SpeedInsights/>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/connect" element={<Form/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
