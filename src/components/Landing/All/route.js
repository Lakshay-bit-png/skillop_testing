import React from "react";
import CommonLanding from "../common";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Chat from "../chatroom";
import CheckProfile from "../../CheckProfile";

function RouteLanding(){
    
return(
        <Router>
            <Routes>
                <Route path='/' element={<CommonLanding/>}/>
                <Route path='/chat' element={<Chat/>}/>
                <Route path='/users' element={<CheckProfile/>}/>
                
               
            </Routes>
        </Router>
)
}

export default RouteLanding