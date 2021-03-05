import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Inicio from './components/Inicio'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'


function App() {
    return (
        <div className="container mt-4">
            <Router>
                <div>
                    <Link to="/" className="btn btn-dark">Inicio</Link>
                    <Link to="/login" className="btn btn-dar ml-2">Login</Link>
                    <Link to="/register" className="btn btn-dar ml-2">Register</Link>
                </div>
                <Switch>
                    <Route exact path='/' component={Inicio} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/home' component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;