import React from "react";
import index from './index.css'
import Header1 from "../Header";
import { useNavigate } from 'react-router-dom';

function Auth6Component(){
    const navigate = useNavigate();
  
    const redirectToPage7 = () => {
     
      navigate('/laststep');
    };

    return(
        <>
        <Header1/>
        <div className="main-6">
            <div className="head-6">
                Great ! Set Your Availability
            </div>
            <div className="title-6">
                Let Your Peer Know Your Availability
            </div>
        </div>
        </>
    )
}

export default Auth6Component