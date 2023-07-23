import './App.scss';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import Projects from './Components/Projects/Projects';
import Posts from './Components/Posts/Posts';
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
            {/* <Route exact path="/projects/:id" element={<Projects />} />
          <Route exact path="/posts" element={<Posts />} /> */}
          <Route exact path="/CV" element={<CV />} />
        </Routes>
        
        <Particle />
    </Router>
  );
}

export default App;
