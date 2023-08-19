import React, {useEffect} from "react";
import Header1 from "../../Header";
import index from "./index.css";
import rect from "../../images/rect.png";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
function Dashboard() {
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
            <div className="hide-on-mob chosen" onClick={redirecttomyslots} >Slots</div>
            <div className="hide-on-mob" onClick={redirecttomybookings}>Bookings</div>
            <div className="hide-on-mob" onClick={redirecttomyearnings}>Earnings</div>
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
          <div className="header-dash">
            LET YOUR PEER KNOW YOUR AVAILABILITY
          </div>
          <div className="schedules-dash">
            <div className="buttons-dash">
              <button className="today">Today</button>
              <div className="btns-dash">
                <button>On Date </button>
                <button>Month</button>
                <button>23</button>
              </div>
            </div>
            
            <div className="slot-dash">
              <div className="days-dash">
                <div className="days">
                  <input type="checkbox" id="MONDAY" />
                  <label htmlFor="MONDAY">MONDAY</label>
                  
                </div>
                <div className="days-partition"></div>
                <div className="days">
                  <input type="checkbox" id="TUESDAY" />
                  <label htmlFor="TUESDAY">TUESDAY</label>
                </div>
                <div className="days-partition"></div>
                <div className="days">
                  <input type="checkbox" id="WEDNESDAY" />
                  <label htmlFor="WEDNESDAY">WEDNESDAY</label>
                </div>
                <div className="days-partition"></div>
                <div className="days">
                  <input type="checkbox" id="THURSDAY" />
                  <label htmlFor="THURSDAY">THURSDAY</label>
                </div>
                <div className="days-partition"></div>
                <div className="days">
                  <input type="checkbox" id="FRIDAY" />
                  <label htmlFor="FRIDAY">FRIDAY</label>
                </div>
                <div className="days-partition"></div>
                <div className="days">
                  <input type="checkbox" id="SATURDAY" />
                  <label htmlFor="SATURDAY">SATURDAY</label>
                </div>
                <div className="days-partition"></div>
                <div className="days">
                  <input type="checkbox" id="SUNDAY" />
                  <label htmlFor="SUNDAY">SUNDAY</label>
                </div>
                <div className="days-partition"></div>
              </div>
              <div className="slots-dash">
                <div className="slot-1">
                  <select>
                    
                    <option value="8:00">8:00</option>
                    <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    
                    
                  </select>
                  <select>
                  <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>
                <div className="slot-2">
                <select>
                    
                    <option value="8:00">8:00</option>
                    <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    
                    
                  </select>
                  <select>
                  <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>
                <div className="slot-3">
                <select>
                    
                    <option value="8:00">8:00</option>
                    <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    
                    
                  </select>
                  <select>
                  <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>
                <div className="slot-4">
                    <select>
                    
                    <option value="8:00">8:00</option>
                    <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    
                    
                  </select>
                  <select>
                  <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>
                <div className="slot-5">
                    <select>
                    
                    <option value="8:00">8:00</option>
                    <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    
                    
                  </select>
                  <select>
                  <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>
                <div className="slot-6">
                    <select>
                    
                    <option value="8:00">8:00</option>
                    <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    
                    
                  </select>
                  <select>
                  <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>
                <div className="slot-7">
                    <select>
                    
                    <option value="8:00">8:00</option>
                    <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    
                    
                  </select>
                  <select>
                  <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="Save-btn"><button className="save-dash-det">Save</button></div>
        </div>
        
      </div>
    </>
  );
}

export default Dashboard;
