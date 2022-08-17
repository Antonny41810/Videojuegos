import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselApp } from '../../components/Carousel/Index';
import { TextoApp } from '../../components/Texto/Index';
import { Card } from '../../components/Cards/Index';
import './style.css'

export const Home = () => {

    return (
    
    <div className="App ">
         
      <div className='container mt-4'>
      <CarouselApp/>
      </div>

      <div className='container text-white'>
      <TextoApp/>
      </div>

     
      <Card/>
      
          
          
    </div>
    );
    }