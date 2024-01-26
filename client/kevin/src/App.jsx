import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div data-theme="winter" className="px-[8px] font-poppins scroll-smooth">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
