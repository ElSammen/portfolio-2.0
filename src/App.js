import './App.scss';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home/home";
import Projects from './Components/Projects/Projects';
import CV from './Components/CV/CV';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particle from './Components/Particles';


function App() {
  return (
    <Router>
        <Navbar /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/CV" element={<CV />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        
        <Particle />
    </Router>
  );
}

export default App;
