import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/CV" element={<CV />} />
        </Routes>
        
        <Particle />
    </Router>
  );
}

export default App;
