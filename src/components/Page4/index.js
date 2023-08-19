import React from "react";
import index from './index.css'
import Header1 from "../Header";
import { useNavigate } from 'react-router-dom';

function Auth4Component(){
  const navigate = useNavigate();
  
    const redirectToPage5 = () => {
     
      navigate('/collegedetails');
    };
    return(
        <>
        <Header1/>
        <div className="main-4">
         <div className="head-3">
            <h2>Your Profile Helps You Get Discovered</h2>
            
          </div>
          <div className="jobtitles">
            <div>Your Job Titles</div>
            <textarea className="textarea2" placeholder="Enter Something">

            </textarea>
          </div>
          <div className="buttons">
            <button className="nextb" onClick={redirectToPage5}>Next</button>
            <button className="studbt">I m a Student</button>
          </div>

        </div>
        </>
    )
}

export default Auth4Component