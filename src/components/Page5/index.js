import React from "react";
import index from './index.css'
import Header1 from "../Header";
import { useNavigate } from 'react-router-dom';

function Auth5Component(){
  const navigate = useNavigate();
  
    const redirectToPage6 = () => {
     
      navigate('/laststep');
    };
    return(
        <>
        <Header1/>
        <div className="main-5">
         <div className="head-5">
            <h2>Your Profile Helps You Get Personalized <br></br>and Join the Right Community</h2>
            
          </div>
        <div className="input-clg">
             <div>College/University</div>
            <input className="college-name" />
            <div>Graduation Year</div>
            <input className="year"/>
        </div>
        <div className="next-5">
            <button className="nextbtn-5" onClick={redirectToPage6}>Next</button>
            
          </div>

          

        </div>
        </>
    )
}

export default Auth5Component