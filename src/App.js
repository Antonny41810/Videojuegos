import './App.css';
// import NavbarApp from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CarouselApp from './components/Carousel';
// import TextoApp from './components/Texto';
// import FooterApp from './components/Footer';
// import Index from './components/Cards/Index';
import { Home } from './Pages/Home/Index';
import {Route, Routes} from 'react-router-dom';
import { PersonajesApp } from './Pages/Personajes/Index';
import { PlanetasApp } from './Pages/Planetas/Index';
import NavbarApp from './components/Navbar/Navbar';
import FooterApp from './components/Footer/Footer';
import { Detalle } from './Pages/Detalle/Detalle';




function App() {
  return (
    <div className="App">
       <NavbarApp/>
     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/personajes' element={<PersonajesApp />}/>
       <Route path='/planetas' element={<PlanetasApp />}/>
       <Route path='/detalle/:name' element={<Detalle/>}/>
     </Routes>
     
     <FooterApp/>
    </div>
  );
}


export default App;
