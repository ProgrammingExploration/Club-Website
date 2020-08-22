import React from 'react'
import AboutClub from './Views/AboutClub'
import SlideShow from './Views/SlideShow'
import Tools from './Views/Tools'

const Main = () => {
    return (
        <main>
            <div className="about-club">
                <AboutClub />
            </div>
            <div className="slideshow">
                <SlideShow />
            </div>
            <div className="tools">
                <Tools />
            </div>
        </main>
    );
}

export default Main;