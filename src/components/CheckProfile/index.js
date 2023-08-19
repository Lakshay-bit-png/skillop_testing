import React, { useEffect, useState, useRef } from "react";
import Header1 from "../Header";
import index from "./index.css";
import logo from "../images/logo.png";
import user from "../images/user.png";
import meet from "../images/meet.jpeg";

import { useNavigate } from "react-router-dom";

function CheckProfile() {
    const navigate = useNavigate();
    const redirecttochats=()=>{
        navigate('/chat')
    }
   
    const redirecttohome=()=>{
        navigate('/home')
    }
  const blurbg = () => {
    
    document.querySelector(".search-field").classList.add("backblur");
    document.querySelector(".search-bar-landing").style.width = "300px";
    document.querySelector(".search-bar-landing").style.background = "none";
    document.querySelector(".search-bar-landing").style.borderBottom =
      "1px solid gray";
    document.querySelector(".search-bar-landing").style.borderRadius = "0";
  };
  const showhideresults = (event) => {
    var z = document.querySelector(".filtered-results");
    var t = document.querySelector(".search-bar-landing");
    if (t.value.length) {
      z.classList.remove("hidethis");
    }
  };
  const shownavlanding = () => {
    var displaystatus = document.querySelector(".nav-landing-mob");
    var a = document.querySelector(".l1");
    var b = document.querySelector(".l2");
    var c = document.querySelector(".l3");
    if (displaystatus.classList[1]) {
      displaystatus.classList.remove("translatenav");
      a.classList.add("func1");
      b.classList.add("func2");
      c.classList.add("func3");
    } else {
      displaystatus.classList.add("translatenav");
      a.classList.remove("func1");
      b.classList.remove("func2");
      c.classList.remove("func3");
    }
  };
  const targetRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (targetRef.current && !targetRef.current.contains(event.target)) {
        // This condition checks if the clicked element is not within the target div
        // Place your function code here

        document.querySelector(".filtered-results").classList.add("hidethis");
        document.querySelector(".search-bar-landing").value = "";
        document.querySelector(".search-bar-landing").style.width = "200px";
        document.querySelector(".search-bar-landing").style.borderRadius =
          "20px";
        document.querySelector(".search-bar-landing").style.background =
          "rgb(225,225,225)";
        document.querySelector(".search-bar-landing").style.width = "200px";
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [inputValue, setInputValue] = useState("");

  // Function to handle input changes
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const likethispost = (event) => {
    if (event.target.style.color != "rgb(16, 39, 111)") {
      event.target.style.color = "rgb(16, 39, 111)";
    } else {
      event.target.style.color = "gray";
      
    }
  };

  return (
    <>
      <div className="nav-landing">
        <div className="header-landing">
          <img src={logo} alt="SKILLOP Logo" />
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>SKILLOP</span>
        </div>
        <div className="search-field" ref={targetRef}>
          <input
            className="search-bar-landing"
            placeholder="Search Here"
            onClick={blurbg}
            onChange={showhideresults}
          />
          <div className="filtered-results hidethis">
            <div>
              <img src={logo} />
              <span className="searched-details">Lakshay Garg</span>
            </div>
            <div className="searched-results-partition"></div>
            <div>
              <img src={logo} />
              <span className="searched-details">Lakshay Garg</span>
            </div>
            <div className="searched-results-partition"></div>
            <div>
              <img src={logo} />
              <span className="searched-details">Lakshay Garg</span>
            </div>
            <div className="searched-results-partition"></div>
            <div>
              <img src={logo} />
              <span className="searched-details">Lakshay Garg</span>
            </div>
          </div>
        </div>
        <div className="right-options">
          <div className="home" onClick={redirecttohome}>
            <i
              style={{ fontSize: "20px", color: "white" }}
              className="fa fa-home"
            ></i>
            <span style={{ fontSize: "16px", color: "white" }} >HOME</span>
          </div>
          <div className="notifications">
            <i style={{ color: "gray" }} className="fa fa-bell"></i>
          </div>
          <div className="messages">
            <span className="chat" onClick={redirecttochats}>Chats</span>
          </div>
          <div className="profile-icon">
            <img className="user-profile" src={user} />
          </div>
        </div>
        <div className="hamburg-landing" onClick={shownavlanding}>
          <div className="l1"></div>
          <div className="l2"></div>
          <div className="l3"></div>
        </div>
      </div>
      <div className="nav-landing-mob translatenav">
        <span>Home</span>
        <span>Notifications</span>
        <span>Chat</span>
        <span>Profile</span>
      </div>
      <div className="user-main-content-landing">
        <div className="user-profile">
          <div className="profile-bg-user">
            <div className="user-info">
              <img src={user} className="user-prof-img" />
              <div>
                <div
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                  className="details-user"
                >
                  User 1234
                </div>
                <br></br>
                <button className="connect-user">Connect</button>
              </div>
            </div>
          </div>
          <div className="about-this-user">
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>About:</span>
            <span style={{ padding: "20px" }}>
              This is the info about the user whose profile you have visited{" "}
            </span>
          </div>
        </div>
        <div className="Slot-list">
          <div className="filter-slots"></div>
          <div className="slot-1-other">
            <div className="slot-details-user">
              <span className="day-slot">Monday</span>
              <span className="date-slot">21/08/23</span>
              <span className="amount-slot">500/-</span>
              <button className="booking-this-slot">Book</button>
            </div>
          </div>

          <div className="slot-2-other">
          <div className="slot-details-user">
              <span className="day-slot">Monday</span>
              <span className="date-slot">21/08/23</span>
              <span className="amount-slot">500/-</span>
              <button className="booking-this-slot">Book</button>
            </div>
          </div>
          <div className="slot-3-other">
          <div className="slot-details-user">
              <span className="day-slot">Monday</span>
              <span className="date-slot">21/08/23</span>
              <span className="amount-slot">500/-</span>
              <button className="booking-this-slot">Book</button>
            </div>
          </div>
          <div className="slot-4-other">
          <div className="slot-details-user">
              <span className="day-slot">Monday</span>
              <span className="date-slot">21/08/23</span>
              <span className="amount-slot">500/-</span>
              <button className="booking-this-slot">Book</button>
            </div>
          </div>
          <div className="slot-5-other">
          <div className="slot-details-user">
              <span className="day-slot">Monday</span>
              <span className="date-slot">21/08/23</span>
              <span className="amount-slot">500/-</span>
              <button className="booking-this-slot">Book</button>
            </div>
          </div>
          <div className="slot-6-other">
          <div className="slot-details-user">
              <span className="day-slot">Monday</span>
              <span className="date-slot">21/08/23</span>
              <span className="amount-slot">500/-</span>
              <button className="booking-this-slot">Book</button>
            </div>
          </div>
          <div className="slot-7-other">
          <div className="slot-details-user">
              <span className="day-slot">Monday</span>
              <span className="date-slot">21/08/23</span>
              <span className="amount-slot">500/-</span>
              <button className="booking-this-slot">Book</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CheckProfile;
