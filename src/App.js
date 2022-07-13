import './App.css';
import NavbarApp from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselApp from './components/Carousel';
import TextoApp from './components/Texto';
import CardApp from './components/Cartas';
import FooterApp from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavbarApp/>
      <div className='container'>
      <CarouselApp/>
      </div>
      
      <TextoApp/>
      <div className='ContainerCard'>
      <CardApp/>
      <CardApp/>
      <CardApp/>
      </div>
      <FooterApp/>
    </div>
  );
}

export default App;
