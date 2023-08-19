import React,{useEffect} from "react";
import linkedin from '../../images/linkedin.png'
import google from '../../images/google.png'
import Header1 from "../../Header";
import logo from '../../images/logo.png'
import { Navigate, useNavigate } from "react-router-dom";

function Account() {
  /*---------LINKING ROUTES---------*/
  const redirecttomyslots=()=>{
    navigate('/mySlots')
  }
  const redirecttomyearnings=()=>{
    navigate('/myearnings')
  }
  const redirecttomybookings=()=>{
    navigate('/mybookings')
  }
  const redirecttomyaccount=()=>{
    navigate('/myaccount')
  }

  /*--------------------------------*/


  const navigate = useNavigate();
  useEffect(() => {
    // This code will run when the component mounts (DOM content is loaded)
    document.querySelector('.side-nav-mob').classList.add('display')

    // You can put your specific JavaScript code here
    // For example, you can interact with the DOM or fetch data
  }, []);
  const displaynavmob=()=>{

    var x=document.querySelector('.side-nav-mob')
    if(x.classList[1]){
      x.classList.remove('display')
      
      
     
      
    }
    else{x.classList.add('display');
   
   }
  }
  useEffect(() => {
    // This function will run when the DOM content is loaded.
    var inp1 = document.querySelectorAll('.editable-input')
    for(var i =0;i<=3;i++){
      inp1[i].disabled=true;
      
      }
  }, []);
  const enabledisableinput= ()=>{
    var inp = document.querySelectorAll('.editable-input')
    
  if(inp[0].disabled){
  for(var i =0;i<=3;i++){
    inp[i].disabled=false;
    
    }
    document.querySelector('.edit-input').style.backgroundColor='greenyellow'
    document.querySelector('.edit-input').style.color='black'
    document.querySelector('.edit-input').textContent='Save'

  } 
  else{
    for(var i =0;i<=3;i++){
      inp[i].disabled=true;
      }
      document.querySelector('.edit-input').style.backgroundColor='black'
    document.querySelector('.edit-input').style.color='white'
    document.querySelector('.edit-input').textContent='Edit'
  }
  }
    
  
 

  return (
    <>
     
      <div className="dash-main">
      
        <div className="userdash">
       
          <div className="dashbg">
            <div className="rounded-img"></div>
          </div>

          <div className="info-user">
            <div className="about-user" style={{ fontWeight: "bold" }}>
              About:
            </div>
            <div className="para-about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut laboreet dolore magna aliqua.piscing
              elit, sed do eiusmod tempor incididuntdg ut labore et dolore magna
              aliqua.
            </div>
          </div>
          <div className="contact-details">
            <div className="email-d">
              <span style={{ fontWeight: "bold" }}>Email:</span>person@gmail.com
            </div>
            <div className="phone-d">
              <span style={{ fontWeight: "bold" }}>Phone:</span>+919898989898
            </div>
            <div className="upi-d">
              <span style={{ fontWeight: "bold" }}>UPI:</span>9898989898@upi
            </div>
          </div>
          <div className="Editor-dashboard">
            <button className="edit-d">Edit Profile</button>
          </div>
        </div>

        <div className="dash-right">
        <div className="dash-nav">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={logo} alt="SKILLOP Logo" />
              <div>SKILLOP</div>
            </div>
            <div className="hide-on-mob" onClick={redirecttomyslots} >Slots</div>
            <div className="hide-on-mob" onClick={redirecttomybookings}>Bookings</div>
            <div className="hide-on-mob" onClick={redirecttomyearnings}>Earnings</div>
            <div className="hide-on-mob chosen" onClick={redirecttomyaccount}>Account</div>
            <div className="view-on-mob">My Profile</div>
            <div className="login-out hide-on-mob">Log Out</div>
            <div className="hamburg-dash"  onClick={displaynavmob}>
              <div className="line1-dash"></div>
              <div className="line2-dash"></div>
              <div className="line3-dash"></div>
            </div>
          </div>
          <div className="side-nav-mob">
            
            <div>Slots</div>
            <div>Bookings</div>
            <div>Earnings</div>
            <div>Account</div>
            <div>My Profile</div>
            <div>Logout</div>
          </div>
          <div className="partition-d"></div>
          <div className="social-dash">
            <h1>Account </h1>
            <div className="social-details">
                <div className="linkedin-dash" >
                  <img src={linkedin}/>
                  <input type="text" placeholder="www.linkedin.com" className="editable-input" />
                </div>
                <div className="gmail-dash" >
                <img src={google}/>
                <input type="text" placeholder="example@gmail.com" className="editable-input" />
                </div>
                <div className="phone-dash" >
                <i className="fa fa-phone" />
                <input type="text" placeholder="+91 8888888888" className="editable-input" />
                </div>
                <div className="upi-id-dash">
                <i className="fa fa-credit-card" />
                  <input type="text" placeholder="8888888888@upi" className="editable-input" />
                </div>
                
                
            </div>
          </div>
          <div className="editor-ids"><button className="edit-input" onClick={enabledisableinput} >Edit</button>
                                    <button className="delete-account-dash">Delete Account</button></div>

        </div>
      </div>
    </>
  );

  
}

export default Account;
