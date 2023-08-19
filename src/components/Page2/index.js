import React from "react";
import index from './index.css'
import Header1 from "../Header";
import { useNavigate } from 'react-router-dom';

const Auth2Component = () => {
  
  const navigate = useNavigate();
  
    const redirectToPage3 = () => {
     
      navigate('/skills');
    };
    return (
      <div>
       <Header1/>
        <div className="main-2">
          <div className="head-2">
            <h2>Continue As</h2>
            <div>You can Also Edit it Later</div>
          </div>
          <form id="myform2" onSubmit={redirectToPage3}>
          <div className="profiles">
            <div className="Mentor">
              
              <div style={{position:'absolute',bottom:'-30px',display:'flex',justifyContent:'center',width:'183px',fontWeight:'bold'}}><input type='radio' name="category" id="mentor" required/><label for="mentor">Mentor</label></div>
            </div>
            <div className="pt">Or</div>
            <div className="Mentee">
            <div style={{position:'absolute',bottom:'-30px',display:'flex',justifyContent:'center',width:'183px',fontWeight:'bold'}}><input type='radio' name="category" id="mentee" required/><label for="mentee">Mentee</label></div>
            </div>
          </div>
          </form>
          <div className="next2">
            <button type="submit" form="myform2">Next</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Auth2Component;