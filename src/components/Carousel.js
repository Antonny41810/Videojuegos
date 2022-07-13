import Carousel from 'react-bootstrap/Carousel';
import Imagen1 from '../Assets/Img/slider1.png';
import Imagen2 from '../Assets/Img/slider2.jpg';
import Imagen3 from '../Assets/Img/slider3.jpg';
import Imagen4 from '../Assets/Img/slider4.jpg';
import Imagen5 from '../Assets/Img/slider5.jpg';
import '../App.css';

function CarouselApp() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={Imagen1}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={Imagen2}
        />

      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={Imagen3}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={Imagen4}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={Imagen5}
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselApp;