import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpdateUser from './vue/updateuser';
import Login from './vue/login';
import ShowUser from './vue/showuser';
import SignUp from './vue/signup'; 
 
function AppRouter() {
    return (
        <Router>

            <Routes>                
                <Route path="/login" element={<Login />} />
                <Route path="/showuser/:userId" element={<ShowUser />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/updateuser/:userId" element={<UpdateUser />} />
            </Routes>
        </Router>
    );
}
 
export default AppRouter; 