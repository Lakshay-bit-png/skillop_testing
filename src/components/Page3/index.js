import React from "react";
import index from './index.css'
import Header1 from "../Header";
import { useNavigate } from 'react-router-dom';

function Auth3Component(){
  
  const navigate = useNavigate();
  
    const redirectToPage4 = () => {
     
      navigate('/jobtitles');
    };
  var y =0 ;
  
  const elaborate=()=>{
    if(y==0){
      document.querySelector('.other').style.backgroundColor='cyan';
      document.querySelector('.explain').classList.remove('hidethis');
      y++
    }
    else{document.querySelector('.other').style.backgroundColor='white';
    document.querySelector('.explain').classList.add('hidethis');
    y--}
  }
   
    return(
        <>
        <Header1/>
        <div class='main-3'>
          
         <div className="head-3">
            <h2>Tell Us Your Skills</h2>
            <div>Choose Your Skills</div>
          </div>
          <form>
          <div className="options">
            <div className="row-1">
                <div>Skill 1</div>
                <div>Skill 2</div>
                <div>Skill 3</div>
                <div>Skill 4</div>
                <div>Skill 5</div>
                <div>Skill 6</div>
                </div>
            <div className="row-2">
                <div>Skill 7</div>
                <div>Skill 8</div>
                <div>Skill 9</div>
                <div onClick={elaborate} className="other">Other</div>
               
            </div>
          </div>

          </form>
          <div className="explain hidethis">
            <div className="header-explain">Explain A little about Your Skills</div>
            <textarea
            className="textarea"
            rows="8" // Adjust the number of visible rows
            cols="50" // Adjust the number of visible columns
            placeholder="I am a Professional Mentor and has provided mentorship to more than 1000 students"
            maxLength={200} ></textarea>
          </div>
          
          <div className="next">
            <button onClick={redirectToPage4}>Next</button>
          </div>
        </div>
        </>
    )
}
 export default Auth3Component