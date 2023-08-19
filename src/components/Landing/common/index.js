import React, { useEffect, useState, useRef } from "react";
import Header1 from "../../Header";
import index from "./index.css";
import logo from "../../images/logo.png";
import user from "../../images/user.png";
import meet from "../../images/meet.jpeg";

import { useNavigate } from "react-router-dom";




function CommonLanding() {
   const navigate = useNavigate();
    const redirecttochats=()=>{
        navigate('/chat')
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

  const likethispost=(event)=>{
    if(event.target.style.color!='rgb(16, 39, 111)'){
    event.target.style.color='rgb(16, 39, 111)';
    
    }
    else{
        event.target.style.color='gray';
        document.querySelector('.like-count').value-=1
    }
  }

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
          <div className="home">
            <i
              style={{ fontSize: "20px", color: "white" }}
              className="fa fa-home"
            ></i>
            <span style={{ fontSize: "16px", color: "white" }}>HOME</span>
          </div>
          <div className="notifications">
            <i style={{ color: "gray" }} className="fa fa-bell"></i>
          </div>
          <div className="messages">

            <span className="chat" onClick={redirecttochats}>Chats</span>
          </div>
          <div className="profile-icon">
            <img className="user-profile" src={user} onClick={redirecttomydashboard} />
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
      <div className="main-content-landing">
        <div className="my-profile-landing">
          <div className="profile-landing-bg">
            <div className="profile-img">
              <img src={user} />
            </div>
          </div>
          <div className="brief">
            <div style={{ fontWeight: "bold" }} className="my-name">
              User
            </div>
            <div className="det">
              <div style={{ fontWeight: "bold" }} className="prof-status">
                Mentor/Mentee
              </div>
              <div className="profession">--Developer</div>
            </div>
          </div>
        </div>
        <div className="posting-on-landing">
          <div className="user-new-post">
            <div className="user-post-head">
              <div className={inputValue.length>=1 ? 'post-this active': 'post-this not-active'}>Post</div>
              <img src={user} />
              <input
                className="content-user-post"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="What are you Thinking..... ?"
              />
            </div>
            <div className="upload-section">
              <div
                style={{ backgroundColor: "#FF814E" }}
                className="photo-upload"
              >
                Photo
              </div>
              <div style={{ background: "#FFD200" }} className="video-upload">
                Video
              </div>
              <div
                style={{ background: "rgba(220, 255, 146, 1)" }}
                className=""
              ></div>
              <div
                style={{ background: "rgba(37, 206, 209, 1)" }}
                className=""
              ></div>
            </div>
          </div>
          <div className="people-post">
            <div className="post-1">
              <div className="post-postedby">
                <img src={user} />
                <div>
                  <span style={{fontWeight:'bold'}}className="posted-by-name">User1234</span>
                  <span style={{fontSize:'12px'}}className="posted-by-brief">Mentor</span>
                </div>
              </div>
              <img src={meet} className="img-posted"/>
              <div className="reactions">
                <i style={{fontSize:'25px',color:'gray',cursor:'pointer'}}className="fa fa-thumbs-up" onClick={likethispost}></i>
                <div className="like-count">4 likes</div>
              </div>
            </div>
            <div className="post-1">
              <div className="post-postedby">
                <img src={user} />
                <div>
                  <span style={{fontWeight:'bold'}}className="posted-by-name">User1234</span>
                  <span style={{fontSize:'12px'}}className="posted-by-brief">Mentor</span>
                </div>
              </div>
              <img src={meet} className="img-posted"/>
              <div className="reactions">
                <i style={{fontSize:'25px',color:'gray',cursor:'pointer'}}className="fa fa-thumbs-up" onClick={likethispost}></i>
                <div className="like-count">4 likes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CommonLanding

