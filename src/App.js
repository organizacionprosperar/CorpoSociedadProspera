import './styles.css';
import {Route, Router} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/home"
import Footer from './components/footer';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from './pages/home.js';
// import About from './pages/about.js';
// import Services from './pages/services.js';

function App() {
  return (
      
    <div className="App">
      
    <Navbar  />
    <Home />
    <Footer/>
  </div>



  );
}

export default App;
