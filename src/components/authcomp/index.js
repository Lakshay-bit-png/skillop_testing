import React from "react";



import Header1 from '../../components/Header/index'
import Page1 from "../../components/Page1/index";
import Auth2Component from '../../components/Page2';
import Auth3Component from '../../components/Page3'
import Auth4Component from '../../components/Page4'
import Auth5Component from '../../components/Page5'
import Auth6Component from '../../components/Page6'
import Auth7Component from '../../components/Page7'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function AuthPage(){
    return(
        <Router>
 
        <Routes>
         
          <Route path="/" element={<Page1 />} />
          <Route path="/continue" element={<Auth2Component />} />
          <Route path='/skills' element={<Auth3Component/>} />
          <Route path='/jobtitles' element={<Auth4Component/>} />
          <Route path='/collegedetails' element={<Auth5Component/>} />
          <Route path='/slots' element={<Auth6Component/>} />
          <Route path='/laststep' element={<Auth7Component/>} />
          
          

          {/* Add more routes if needed */}
        </Routes>
      </Router>
    )
}

export default AuthPage;