import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from '../routers/Home/Home';
import Profile from '../routers/Profile/Profile';
import AuthUser from '../routers/AuthUser/AuthUser';
const AppRouter = ({init}) => {

    return(
        <Router>
            <Routes>
                {init ? <Route exact path="/" element={<Home/>}/>
                : <Route exact path="/" element={<AuthUser/>}/>}      
                <Route exact path="/profile" element={<Profile/>} />
            </Routes>
        </Router>
    )
};

export default AppRouter;