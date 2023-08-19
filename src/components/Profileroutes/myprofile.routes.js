import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Account from "../dashboard/account";
import Dashboard from "../dashboard/common";
import Earning from "../dashboard/earnings";
import Bookings from "../dashboard/bookings";

function MyProfile(){
    return(
        <Router>
            <Routes>
                <Route path='/myaccount' element={<Account/>} />
                <Route path='/mybookings' element={<Bookings/>} />
                <Route path='/mySlots' element={<Dashboard/>} />
                <Route path='/myearnings' element={<Earning/>} />
            </Routes>
        </Router>
    )

}


export default MyProfile;