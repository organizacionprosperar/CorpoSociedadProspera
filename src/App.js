import './styles.css';
import Navbar from "./components/Navbar"
import Home from "./pages/home"
import Footer from './components/footer';
import About from './pages/about.js';
import Services from './pages/services.js';
import Institucion from './pages/nuestraInstitucion/institucion';
import Noticia from './pages/Noticias/noticias';
import objetosFunciones from './pages/nuestraInstitucion/objetosFunciones';
import PrincipiosValores from './pages/nuestraInstitucion/principiosValores';
import Organigrama from './pages/nuestraInstitucion/organigrama';


import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from './pages/home.js';
// import About from './pages/about.js';

function App() {
  return (
      
    <div className="App">
      <Router >
    <Navbar  />
    <Route path="/" exact={true} component={Home} />
    <Route path="/services" exact={true} component={Services} />
    <Route path="/about" exact={true} component={About} />
    <Route path="/institucion" exact={true} component={Institucion}/>
    <Route path="/noticia" exact={true} component={Noticia}/>
    <Route path="/objetosFunciones" exact={true} component={objetosFunciones}/>
    <Route path="/principiosValores" exact={true} component={PrincipiosValores}/>
    <Route path="/organigrama" exact={true} component={Organigrama}/>
    
    <Footer/>
    </Router>
  </div>



  );
}

export default App;