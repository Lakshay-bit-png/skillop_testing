import React from "react";
import index from "./index.css";
import Header1 from "../Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateIsMentor } from "../../api/userRequest";
function Auth5Component() {
    const navigate = useNavigate();
    const [educationInstitution, setEducationInstitution] = useState("");
    const [endYear, setEndYear] = useState("");

    const redirectToPage6 = async () => {
        try {
            const request = {
                educationInstitution,
                endYear,
            };
            const { data } = await updateIsMentor(request);

            console.log(data);
            if (data.result) navigate("/laststep");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Header1 />
            <div className="main-5">
                <div className="head-5">
                    <h2>
                        Your Profile Helps You Get Personalized <br></br>and
                        Join the Right Community
                    </h2>
                </div>
                <div className="input-clg">
                    <div>College/University</div>
                    <input
                        className="college-name"
                        onChange={(e) =>
                            setEducationInstitution(e.target.value)
                        }
                        value={educationInstitution}
                    />
                    <div>Graduation Year</div>
                    <input
                        className="year"
                        onChange={(e) => setEndYear(e.target.value)}
                        value={endYear}
                    />
                </div>
                <div className="next-5">
                    <button className="nextbtn-5" onClick={redirectToPage6}>
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}

export default Auth5Component;
