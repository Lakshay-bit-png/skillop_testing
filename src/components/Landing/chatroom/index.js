


import React, { useEffect, useState, useRef } from "react";
import Header1 from "../../Header";

import logo from "../../images/logo.png";
import user from "../../images/user.png";
import meet from "../../images/meet.jpeg";

import { useNavigate } from "react-router-dom";




function Chat() {
   const navigate = useNavigate();
    const redirecttoHome=()=>{
        navigate('/')
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
          <div className="home" onClick={redirecttoHome}>
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

            <span className="chat" >Chats</span>
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
        <div className="chat-room">
            <div className="chatting">
                <div className="chat-user-details">
                    <img src={user} className="chat-user-img"></img>
                    <div className="chat-user-name">User Name</div>
                </div>
                <div className="chatbox-messages"></div>
                <div className="message-send-bar">
                    <input placeholder="Enter Your Message" className="message-tobe-sent" />
                    <button className="send-btn">Send</button>
                </div>
            </div>
            <div className="chat-friends-list">
                <div className="user-section">
                    <img src={user}/>
                    <div className="friend-name">User 1212</div>
                </div>
                <div className="partition-users"></div>
                <div className="user-section">
                    <img src={user}/>
                    <div className="friend-name">User 1212</div>
                </div>
                <div className="partition-users"></div>
                <div className="user-section">
                    <img src={user}/>
                    <div className="friend-name">User 1212</div>
                </div>
                <div className="partition-users"></div>
                <div className="user-section">
                    <img src={user}/>
                    <div className="friend-name">User 1212</div>
                </div>
                <div className="partition-users"></div>
                <div className="user-section">
                    <img src={user}/>
                    <div className="friend-name">User 1212</div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
export default Chat

