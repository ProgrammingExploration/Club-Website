import React from 'react'
import AboutMe from './Views/AboutMe'
import Github from './Views/Github'
import PersonalWebsite from './Views/PersonalWebsite'
import Email from './Views/Email'

const Contact = () => {
    return (
        <main className="main">
            <div className="about-me">
                <AboutMe />
            </div>
            <div className="contact">
                <div className="box1">
                    <Github />
                </div>
                <div className="box2">
                    <PersonalWebsite />
                </div>
                <div className="box3">
                    <Email />
                </div>
            </div>
        </main>
    );
}


export default Contact;