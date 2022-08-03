import React from "react";
import Logo from '../Assets/Img/logo.png'


function FooterApp() {
    return (
        <footer class="bg-light text-center text-lg-start" >
    
        <div class="container p-4">
       
          <div class="row m-0">

          <div class="col-lg-3 col-md-12 mb-4 mb-md-0">
     
        <img
              alt=""
              src={Logo}
              width="200"
              height="200"
              className=""
            />
          </div>
            
            <div class="col-lg-5 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase text-center ">Hecho Por:</h5>
      
              <p class="text-center">
               Antony Camilo Linares Portillo
              </p>
            </div>
            
      
            
            <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase text-center">Contacto</h5>
      
              <p class="text-center">
               <strong>Correo: </strong>Aclinares78@misena.edu.co <br></br>
               <strong>Celular: </strong>3117426985 <br></br>
               <strong>Direccion: </strong>Calle 42C #T2-35
              </p>
            </div>
            
          </div>
          
        </div>
    
      
        
        <div class="text-center text-white p-3 bg-dark ">
          © 2022 Copyright: CBI Palmira
        </div>

      </footer>
   );
  }
  export default FooterApp;