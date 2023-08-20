import React, { useEffect } from "react";
import linkedin from "../../images/linkedin.png";
import google from "../../images/google.png";
import Header1 from "../../Header";

import { Navigate, useNavigate } from "react-router-dom";
import Commondash from "../common";
import Topbar from "../topbar";

function Account() {
  /*---------LINKING ROUTES---------*/
  
  /*--------------------------------*/

  const navigate = useNavigate();
  
  useEffect(() => {
    // This function will run when the DOM content is loaded.
    var inp1 = document.querySelectorAll(".editable-input");
    for (var i = 0; i <= 3; i++) {
      inp1[i].disabled = true;
    }
  }, []);
  const enabledisableinput = () => {
    var inp = document.querySelectorAll(".editable-input");

    if (inp[0].disabled) {
      for (var i = 0; i <= 3; i++) {
        inp[i].disabled = false;
      }
      document.querySelector(".edit-input").style.backgroundColor =
        "greenyellow";
      document.querySelector(".edit-input").style.color = "black";
      document.querySelector(".edit-input").textContent = "Save";
    } else {
      for (var i = 0; i <= 3; i++) {
        inp[i].disabled = true;
      }
      document.querySelector(".edit-input").style.backgroundColor = "black";
      document.querySelector(".edit-input").style.color = "white";
      document.querySelector(".edit-input").textContent = "Edit";
    }
  };

  return (
    <>
      <div className="dash-main">
        <Commondash />

        <div className="dash-right">
          <Topbar/>
          <div className="social-dash">
            <h1>Account </h1>
            <div className="social-details">
              <div className="linkedin-dash">
                <img src={linkedin} />
                <input
                  type="text"
                  placeholder="www.linkedin.com"
                  className="editable-input"
                />
              </div>
              <div className="gmail-dash">
                <img src={google} />
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className="editable-input"
                />
              </div>
              <div className="phone-dash">
                <i className="fa fa-phone" />
                <input
                  type="text"
                  placeholder="+91 8888888888"
                  className="editable-input"
                />
              </div>
              <div className="upi-id-dash">
                <i className="fa fa-credit-card" />
                <input
                  type="text"
                  placeholder="8888888888@upi"
                  className="editable-input"
                />
              </div>
            </div>
          </div>
          <div className="editor-ids">
            <button className="edit-input" onClick={enabledisableinput}>
              Edit
            </button>
            <button className="delete-account-dash">Delete Account</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
