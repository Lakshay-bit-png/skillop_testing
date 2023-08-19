import React from "react";
import index from './index.css'
import Header1 from "../Header";


function Auth7Component(){
    return(
        <>
        <Header1/>
        <div className="main-7">
         <div className="head-7">
            <h2>Alright One Last Step</h2>
            
          </div>
        <div className="details-wp">
             <div>Whatsapp Number</div>
            <input className="wp" />
            <div>Upi Id</div>
            <input className="Upi"/>
        </div>
        <div className="finish">
            <button className="finishbt">Finish</button>
            
          </div>

          

        </div>
        </>
    )
}

export default Auth7Component