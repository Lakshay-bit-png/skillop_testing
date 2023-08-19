import React, { useEffect } from "react";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

function Earning() {
  const navigate = useNavigate();
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
  var x=document.querySelector('.side-nav-mob')
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

  return (
    <>
      <div className="dash-main">
        <div className="userdash">
          <div className="dashbg">
            <div className="rounded-img"></div>
          </div>

          <div className="info-user">
            <div className="about-user" style={{ fontWeight: "bold"}}>
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
            <div className="hide-on-mob chosen" onClick={redirecttomyearnings}>Earnings</div>
            <div className="hide-on-mob " onClick={redirecttomyaccount}>Account</div>
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
          <div className="earning-details">
            <div className="total-mentee">
                <h1>300</h1>
                <h3>TOTAL MENTEES</h3>
            </div>
            <div className="earnings-dash">
            <h1>30,000/-</h1>
            <h3>Total Earnings</h3>
            </div>
          </div>
          <div className="info-dash-table">
            <table>
                <thead>
                    
                    <th>Mentee Name</th>
                    <th>Earning</th>
                    <th>Status:</th>
                </thead>
                <tbody>
                    <td>Lakshay</td>
                    <td>500/-</td>
                    <td>Completed</td>
                </tbody>
                <tbody>
                    <td>Lakshay</td>
                    <td>500/-</td>
                    <td>Completed</td>
                </tbody>
                <tbody>
                    <td>Lakshay</td>
                    <td>500/-</td>
                    <td>Completed</td>
                </tbody>
                <tbody>
                    <td>Lakshay</td>
                    <td>500/-</td>
                    <td>Completed</td>
                </tbody>
                <tbody>
                    <td>Lakshay</td>
                    <td>500/-</td>
                    <td>Completed</td>
                </tbody>
                <tbody>
                    <td>Lakshay</td>
                    <td>500/-</td>
                    <td>Completed</td>
                </tbody>
                <tbody>
                    <td>Lakshay</td>
                    <td>500/-</td>
                    <td>Completed</td>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
  }

export default Earning;
