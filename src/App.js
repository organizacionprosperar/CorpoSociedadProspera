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
import Directorio from './pages/nuestraInstitucion/directorios';
import Seccionales from './pages/nuestraInstitucion/seccionales';
import Simbolos from './pages/nuestraInstitucion/Simbolos';
import noticias from './pages/Noticias/noticias';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './pages/home.js';
// import About from './pages/about.js';

function App() {
  return (

    <div className="App">
      <Router >
      <Navbar />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/services" exact={true} component={Services} />
          <Route path="/about" exact={true} component={About} />
          <Route path="/institucion" exact={true} component={Institucion} />
          <Route path="/noticia" exact={true} component={Noticia} />
          <Route path="/objetosFunciones" exact={true} component={objetosFunciones} />
          <Route path="/principiosValores" exact={true} component={PrincipiosValores} />
          <Route path="/organigrama" exact={true} component={Organigrama} />
          <Route path="/directorios" exact={true} component={Directorio} />
          <Route path="/seccionales" exact={true} component={Seccionales} />
          <Route path="/simbolos" exact={true} component={Simbolos} />
          <Route path="/noticias" exact={true} component={noticias} />
        </Switch>
        <Footer />
      </Router>
    </div>



  );
}

export default App;