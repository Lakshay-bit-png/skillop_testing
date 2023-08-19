import React from "react";
import index from "./index.css";
import Header1 from "../Header";
import { useNavigate } from "react-router-dom";
import { updateIsMentor } from "../../api/userRequest";
import { useState } from "react";
function Auth4Component() {
    const navigate = useNavigate();
    const [jobtitles, setJobtitles] = useState("");
    const redirectToPage5 = async () => {
        console.log("nt running");
        try {
            const request = {
                jobTitle: jobtitles,
            };
            const { data } = await updateIsMentor(request);

            console.log(data);
            if (data.result) navigate("/skills");
        } catch (error) {
            console.log(error);
        }
        navigate("/collegedetails");
    };
    return (
        <>
            <Header1 />
            <div className="main-4">
                <div className="head-3">
                    <h2>Your Profile Helps You Get Discovered</h2>
                </div>
                <div className="jobtitles">
                    <div>Your Job Titles</div>
                    <textarea
                        className="textarea2"
                        placeholder="Enter Something"
                        onChange={(e) => setJobtitles(e.target.value)}
                        value={jobtitles}
                    ></textarea>
                </div>
                <div className="buttons">
                    <button className="nextb" onClick={redirectToPage5}>
                        Next
                    </button>
                    <button
                        className="studbt"
                        onClick={() => {
                            navigate("/collegedetails");
                        }}
                    >
                        I m a Student
                    </button>
                </div>
            </div>
        </>
    );
}

export default Auth4Component;
