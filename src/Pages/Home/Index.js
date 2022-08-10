import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselApp } from '../../components/Carousel/Index';
import { TextoApp } from '../../components/Texto/Index';
import { Card } from '../../components/Cards/Index';

export const Home = () => {

    return (
    
    <div className="App ">
         
      <div className='container mt-4'>
      <CarouselApp/>
      </div>

      <div className='container'>
      <TextoApp/>
      </div>

      <div className='ContainerCard'>
      <Card/>
      </div>
          
          
    </div>
    );
    }