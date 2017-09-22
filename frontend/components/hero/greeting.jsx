import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Log In</Link>
    <br />
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <header className="greetings-header">
    <div className="logo-container">
      <h2>MeowNow</h2>
      <img src="https://i.imgur.com/dPJ7A0L.png" height="65px" />
    </div>
    <div className="greeting-container">
      <h2 className="username-greeting">Welcome, {currentUser.username}!</h2>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </div>
  </header>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
