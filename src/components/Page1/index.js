import React, { useEffect } from "react";
import index from "./index.css";
import google from "../images/google.png";
import linkedin from "../images/linkedin.png";
import logo from "../images/logo.png";
import Header1 from "../../components/Header/index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { set } from "mongoose";
import axios from "axios";
import { registerUser } from "../../api/userRequest";

function Page1() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const redirectToPage2 = (event) => {
        console.log(event);
        navigate("/continue");
    };

    // useEffect(() => {
    //     const User = async () => {
    //         try {
    //             // const { data } = await userChats(user._id);
    //             const { data } = await registerUser({
    //                 email: email,
    //                 password: password,
    //                 firstname: firstname,
    //                 lastname: lastname,
    //             });

    //             console.log(data.result);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     User();
    // }, []);
    const onSubmiting = async () => {
        try {
            // const { data } = await userChats(user._id);
            const { data } = await registerUser({
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname,
            });

            console.log(data.result);
            data.result ? navigate("/continue") : alert(data.message);
        } catch (error) {
            console.log(error);
        }
    };

    var x = 0;
    const openloginpage = () => {
        if (x == 0) {
            document.querySelector(".name").classList.add("hidethis");
            document.querySelector(".Content-Head").innerHTML = "Welcome Back!";
            document.querySelector(".getstart button").innerHTML = "Login";

            document.querySelector(".already-reg").innerHTML =
                "Don't have an Account ?";
            document.querySelector(".functionhandler").innerHTML = "Sign-Up";
            x = 1;
        } else {
            document.querySelector(".name").classList.remove("hidethis");
            document.querySelector(".Content-Head").innerHTML =
                "Create Your Page";
            document.querySelector(".getstart button").innerHTML =
                "Get Started";

            document.querySelector(".already-reg").innerHTML =
                "Already Have an Account ?";
            document.querySelector(".functionhandler").innerHTML = "Login";
            x--;
        }
    };
    return (
        <>
            <div>
                <Header1 />

                <div className="main-form">
                    <div className="Content-Head">Create Your Page</div>

                    <div className="btns">
                        <button className="linkedin-btn">
                            <img src={linkedin} alt="LinkedIn Icon" />
                            <div className="linkedin">Use LinkedIn</div>
                        </button>
                        <button className="google-btn">
                            <img src={google} alt="Google Icon" />
                            <div className="google">Use Google</div>
                        </button>
                    </div>
                    <div className="partition">
                        <div className="p1"></div>
                        <div className="or">Or</div>
                        <div className="p2"></div>
                    </div>
                    <form onSubmit={redirectToPage2} id="myform">
                        <div className="name">
                            <div className="firstname">
                                <label htmlFor="fname">First Name</label>
                                <input
                                    type="text"
                                    id="fname"
                                    required
                                    onChange={(e) =>
                                        setFirstname(e.target.value)
                                    }
                                />
                            </div>
                            <div className="lastname">
                                <label htmlFor="lname">Last Name</label>
                                <input
                                    type="text"
                                    id="lname"
                                    required
                                    onChange={(e) =>
                                        setLastname(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="id">
                            <div className="email">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="pass">
                                <label htmlFor="pass">Password</label>
                                <input
                                    type="password"
                                    id="pass"
                                    required
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </form>
                    <div className="getstart">
                        <button type="Button" onClick={onSubmiting}>
                            Get Started
                        </button>
                    </div>
                    <div className="changepage">
                        <span className="already-reg">
                            Already Registered ?{" "}
                        </span>
                        &nbsp;
                        <span
                            onClick={openloginpage}
                            className="functionhandler"
                        >
                            Login
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page1;
