import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from '../routers/Home/Home';
import Profile from '../routers/Profile/Profile';
const AppRouter = (props) => {

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/profile" element={<Profile/>} />
            </Routes>
        </Router>
    )
};

export default AppRouter;