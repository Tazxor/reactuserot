import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './vue/login';
import SignUp from './vue/signup';
import UpdateUser from './vue/updateuser';
import ShowUser from './vue/showuser';
import Navbar from './vue/navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
    

          <Route path="/vue/login" component={Login} />
          <Route path="/vue/signup" component={SignUp} />
          <Route path="/vue/updateUser" component={UpdateUser} />
          <Route path="/vue/showUser" component={ShowUser} />

      </div>
    </Router>
  );
};

export default App;
