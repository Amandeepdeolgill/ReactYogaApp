import React, { useState } from 'react';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SignUp from "./SignUp";
import LogIn from './LogIn';
import Sidebar from './Sidebar';

export default function Navbar() {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogIn, setShowLogIn] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [registeredUsers, setRegisteredUsers] = useState([]);
    return (
        <nav className="navbar">
              <div className="leftNav">
                <button onClick={() => setShowSidebar(!showSidebar)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                {showSidebar && <Sidebar />}
            </div>
            <div className="rightNav">
                {showSignUp && <SignUp registeredUsers={registeredUsers} setRegisteredUsers={setRegisteredUsers} />}
                <button className="signBtn" onClick={() => setShowSignUp(!showSignUp)}>Sign Up</button>
                {showLogIn && <LogIn registeredUsers={registeredUsers}  />}
                <button onClick={() => setShowLogIn(!showLogIn)}>Log In</button>
            </div>
        </nav>
    );
}
