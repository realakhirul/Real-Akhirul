import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Upload from './components/Upload';
import Profile from './components/Profile'; // Import Profile

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/upload" component={Upload} />
                <Route path="/profile/:id" component={Profile} /> {/* Profile Route */}
            </Switch>
        </Router>
    );
};

export default App;
