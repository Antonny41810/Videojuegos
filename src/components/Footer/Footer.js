import React from "react";
import Logo from '../../Assets/Img/logo.png'
import './style.css'


export const FooterApp = () => {
    return (
        <footer className="bg-dark text-center text-lg-start " >
    
        <div className="container p-4">
       
          <div className="row m-0">

          <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
     
        <img
              alt=""
              src={Logo}
              width="150"
              height="100"
              className=""
            />
          </div>
            
            <div className="col-lg-5 col-md-12 mb-4 mb-md-0 text-light d-flex justify-content-center align-items-center">
      
              <p className="text-center h5 text2">
               <strong >Antony Camilo Linares Portillo</strong>
              </p>
            </div>
            
      
            
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0 text-light d-flex justify-content-center align-items-center">
          
      
              <p className="text-center h6 text2">
               <strong>Correo: </strong>Aclinares78@misena.edu.co <br></br><br></br>
               <strong>Celular: </strong>3117426985 <br></br><br></br>
               <strong>Direccion: </strong>Calle 42C #T2-35
              </p>
            </div>
            
          </div>
          
        </div>
    
      
        
        <div className="text-center p-3 bg-dark text1">
          © 2022 Copyright: CBI Palmira
        </div>

      </footer>
   );
  }
  export default FooterApp;