import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from '../routers/Home/Home';
import Profile from '../routers/Profile/Profile';
import AuthUser from '../routers/AuthUser/AuthUser';
import Navigation from './Navigation/Navigation';
const AppRouter = ({islogined,userObj}) => {
    return(
        <Router>
            {islogined && <Navigation />}
            <Routes>
                {islogined ? <Route exact path="/" element={<Home userObj={userObj}/>}/>
                : <Route exact path="/" element={<AuthUser/>}/>}      
                <Route exact path="/profile" element={<Profile userObj={userObj}/>} />
            </Routes>
        </Router>
    )
};

export default AppRouter;