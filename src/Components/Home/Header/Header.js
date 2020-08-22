import React, { useState } from 'react'
import Navigation from './Navigation'

const Header = () => {

    return (
        <div>
            <input type="checkbox" name="toggle" id="toggle" />
            <label for="toggle"></label>
            <div className="container">
                <h1>Programming Exploration</h1>
            </div>
            <div className="message">
                <Navigation />
            </div>
        </div>
    );
}

export default Header;