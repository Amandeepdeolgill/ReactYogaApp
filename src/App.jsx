import "./App.css";
import React, { Component } from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Exercises from './pages/Exercises';
import HomePage from "./pages/HomePage";
import Trainers from "./pages/Trainers";

function App () {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/exercises" component={Exercises} />
                    <Route path="/trainers" component={Trainers} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App
